import { Component, OnDestroy } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnDestroy {

  // Estado del reproductor de audio
  isPlaying = false;
  isPaused = false;

  private speechUtterance: SpeechSynthesisUtterance | null = null;
  private voicesReady: Promise<SpeechSynthesisVoice[]> | null = null;

  constructor(private viewportScroller: ViewportScroller) {}
  scrollToSection(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  // ---------- Reproductor de audio (Web Speech API) ----------

  togglePlayPause(): void {
    if (!('speechSynthesis' in window)) {
      alert('Tu navegador no soporta la función de lectura de texto por voz.');
      return;
    }

    if (this.isPlaying) {
      window.speechSynthesis.pause();
      this.isPlaying = false;
      this.isPaused = true;
      return;
    }

    if (this.isPaused) {
      window.speechSynthesis.resume();
      this.isPlaying = true;
      this.isPaused = false;
      return;
    }

    this.startReading();
  }

  private async startReading(): Promise<void> {
    const mainContent = document.querySelector<HTMLElement>('.main-content');
    if (!mainContent) return;

    const textToRead = this.extractReadableText(mainContent);
    if (!textToRead) return;

    const voice = await this.getPreferredVoice();

    this.speechUtterance = new SpeechSynthesisUtterance(textToRead);
    this.speechUtterance.lang = 'es-PE';
    this.speechUtterance.rate = 1.3; // 0.5 a 1.5
    if (voice) this.speechUtterance.voice = voice;

    this.speechUtterance.onend = () => this.resetPlaybackState();
    this.speechUtterance.onerror = () => this.resetPlaybackState();

    window.speechSynthesis.cancel(); // limpia lecturas en cola
    window.speechSynthesis.speak(this.speechUtterance);
    this.isPlaying = true;
    this.isPaused = false;
  }

  /**
   * Extrae el texto legible del contenido principal sin usar `innerText`,
   * que requiere que el nodo esté insertado y con layout calculado y por
   * lo tanto es poco fiable sobre un clon desconectado del documento.
   * `textContent` es sincrónico, no dispara reflow y es más rápido.
   */
  private extractReadableText(source: HTMLElement): string {
    const clone = source.cloneNode(true) as HTMLElement;

    clone
      .querySelectorAll('.audio-player-bar, .omitir, iframe, script, style')
      .forEach(el => el.remove());

    return (clone.textContent ?? '')
      .replace(/[ \t]+/g, ' ')
      .replace(/\n\s*\n+/g, '\n')
      .trim();
  }

  /** Espera a que la lista de voces esté cargada (bug conocido en Chrome) y elige una en español. */
  private getPreferredVoice(): Promise<SpeechSynthesisVoice | null> {
    if (!this.voicesReady) {
      this.voicesReady = new Promise(resolve => {
        const existing = window.speechSynthesis.getVoices();
        if (existing.length) {
          resolve(existing);
          return;
        }
        window.speechSynthesis.onvoiceschanged = () => {
          resolve(window.speechSynthesis.getVoices());
        };
      });
    }

    return this.voicesReady.then(voices =>
      voices.find(v => v.lang === 'es-PE') ??
      voices.find(v => v.lang.startsWith('es')) ??
      null
    );
  }

  private resetPlaybackState(): void {
    this.isPlaying = false;
    this.isPaused = false;
  }

  stopAudio(): void {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      this.resetPlaybackState();
    }
  }

  ngOnDestroy(): void {
    // Si el usuario cambia de ruta en la aplicación, detiene el audio automáticamente
    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = null;
      window.speechSynthesis.cancel();
    }
  }
}
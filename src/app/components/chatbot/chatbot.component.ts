import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

// 1. Interfaces para el tipado estricto del árbol de decisiones
interface ChatOption {
  texto: string;
  siguienteNodo: string;
}

interface ChatNode {
  texto: string[];
  opciones: ChatOption[];
}

interface ChatMessage {
  remitente: 'bot' | 'usuario';
  texto: string;
  html: SafeHtml; // Se calcula UNA sola vez al crear el mensaje (ver construirMensaje)
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  @ViewChild('chatBox') private chatBoxContainer!: ElementRef;

  // Historial de la conversación en pantalla
  historial: ChatMessage[] = [];

  // Opciones de botones activas en el momento
  opcionesActuales: ChatOption[] = [];

  // 2. Definición del árbol de decisiones
  private chatTree: Record<string, ChatNode> = {
    inicio: {
      texto: ["¡Hola! Bienvenido al Observatorio Nacional de Prospectiva. ¿En qué puedo ayudarte?"],
      opciones: [
        { texto: "¿Que es el observatorio?", siguienteNodo: "observatorio" },
        { texto: "Notas de actualidad", siguienteNodo: "actualidad" },
        { texto: "Ver publicaciones", siguienteNodo: "publicaciones"},
        { texto: "Geoceplan", siguienteNodo: "geo"},
        { texto: "Consultas", siguienteNodo: "consultas"}
      ]
    },
    observatorio: {
      texto: ["El Observatorio Nacional de Prospectiva es la plataforma de información sobre tendencias, escenarios, riesgos, oportunidades y eventos de futuro, sistematizada para el uso, consulta y aportes de los planificadores del país y del público en general."
      ],
      opciones: [
        { texto: "Notas de actualidad", siguienteNodo: "actualidad" },
        { texto: "Volver al inicio", siguienteNodo: "inicio" }
      ]
    },
    actualidad: {
      texto: ["Las notas de actulidad las puedes encontrar en el siguiente enlace:", 
        "https://observatorio.ceplan.gob.pe/actualidad/709"],
      opciones: [
        { texto: "Ambitos Territoriales", siguienteNodo: "territorial" },
        { texto: "Volver al inicio", siguienteNodo: "inicio" }
      ]
    },
    geo: {
      texto: ["<strong>Plataforma de información territorial para el planeamiento estratégico</strong> <br>La plataforma tiene como objetivo, facilitar el acceso a información y data relevante para los procesos de planeamiento estratégico en los territorios a nivel nacional. <br> La información disponible de la plataforma está organizada por cada fase del ciclo de planeamiento estratégico.", 
        "Puedes ingresar en el siguiente enlace: https://geo.ceplan.gob.pe/"],
      opciones: [
        { texto: "Volver al inicio", siguienteNodo: "inicio" }
      ]
    },
    publicaciones:{
      texto:["En el siguiente enlace vas a poder encontrar nuestras publicaciones", "https://observatorio.ceplan.gob.pe/publicacion"],
      opciones: [
        {texto: "Volver al inicio", siguienteNodo: "inicio"}
      ]
    },
    consultas:{
      texto:["El Módulo de Reportes de Asignación y Ejecución Presupuestal (AEP), a través del cual es posible extraer reportes predeterminados con información de los Sectores, Pliegos, Unidades Ejecutoras, Departamentos, Provincias y Distritos.",
        "Ingresa al modulo de consulta aquí: https://www.ceplan.gob.pe/modulo-de-consultas/"],
      opciones: [
        {texto: "Volver al inicio", siguienteNodo: "inicio"}
      ]
    }
  };

  constructor(private sanitizer: DomSanitizer) {}

  // Detecta URLs dentro de un texto y las convierte en enlaces clickeables.
  private formatearTexto(texto: string): SafeHtml {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const textoConEnlaces = texto.replace(
      urlRegex,
      (url) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`
    );
    return this.sanitizer.bypassSecurityTrustHtml(textoConEnlaces);
  }

  // Crea el objeto del mensaje calculando el SafeHtml UNA sola vez.
  // Importante: nunca llamar formatearTexto() directamente desde el template,
  // porque bypassSecurityTrustHtml() genera una referencia nueva en cada
  // ciclo de detección de cambios y Angular destruiría/recrearía el <a>
  // constantemente.
  private construirMensaje(remitente: 'bot' | 'usuario', texto: string): ChatMessage {
    return { remitente, texto, html: this.formatearTexto(texto) };
  }

  ngOnInit(): void {
    // No inicializamos aquí para que no consuma recursos en segundo plano antes de abrirse
  }

  // Se ejecuta al hacer clic en tu p-button
  onChatOpen(): void {
    // Solo inicia el flujo si es la primera vez que lo abren
    if (this.historial.length === 0) {
      this.irAlNodo('inicio');
    } else {
      this.scrollToBottom();
    }
  }

  // Mueve el flujo de la conversación a un nodo específico
  irAlNodo(nodoKey: string): void {
    const nodo = this.chatTree[nodoKey];
    if (!nodo) return;

    // Limpiamos opciones para que no den clic mientras el bot "escribe" varias cosas
    this.opcionesActuales = [];

    // Recorremos secuencialmente los mensajes del nodo
    nodo.texto.forEach((textoIndividual, index) => {
      setTimeout(() => {
        this.historial.push(this.construirMensaje('bot', textoIndividual));
        this.scrollToBottom();

        // Si es el último mensaje del array, mostramos los botones correspondientes
        if (index === nodo.texto.length - 1) {
          this.opcionesActuales = nodo.opciones;
        }
      }, index * 500); // 500ms de separación entre cada burbuja para simular realismo
    });
  }

  // Se ejecuta cuando el usuario presiona una de las opciones predeterminadas
  seleccionarOpcion(opcion: ChatOption): void {
    // 1. Añadir la respuesta del usuario al chat
    this.historial.push(this.construirMensaje('usuario', opcion.texto));

    // Ocultar botones momentáneamente para simular fluidez
    this.opcionesActuales = [];
    this.scrollToBottom();

    // 2. Esperar un breve delay y saltar al siguiente nodo del árbol
    setTimeout(() => {
      this.irAlNodo(opcion.siguienteNodo);
    }, 400);
  }

  // Controla el auto-scroll para mostrar siempre los últimos mensajes abajo
  private scrollToBottom(): void {
    setTimeout(() => {
      try {
        if (this.chatBoxContainer) {
          this.chatBoxContainer.nativeElement.scrollTop = this.chatBoxContainer.nativeElement.scrollHeight;
        }
      } catch (err) {
        console.warn('No se pudo realizar el scroll automático', err);
      }
    }, 50);
  }
}
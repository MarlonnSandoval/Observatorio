export interface PasoMetodo {
  numero: number;
  titulo: string;
  descripcion: string;
}

export interface FichaMetodo {
  num: string;
  nombre: string;
  fase: string;
  subetapa?: string;
  definicion: string;
  herramientas: string[];
  pasos: PasoMetodo[];
}
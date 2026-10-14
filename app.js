/* =========================================================
   Empleo Local · Las Toscas, Santa Fe — app.js
   Módulos: ICONOS · DATOS · STORE · UTILIDADES · UI ·
            COMPONENTES · VISTAS · ROUTER · INIT
   Todo el contenido dinámico se genera a partir de los datos
   de demostración de este archivo y de localStorage.
   ========================================================= */
'use strict';

/* ============ 1) ICONOS (SVG inline estilo Lucide) ============ */
const ICONS = {
  'menu': '<line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>',
  'x': '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  'search': '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  'sliders': '<line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/>',
  'map-pin': '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  'clock': '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  'calendar': '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
  'briefcase': '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  'users': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  'user': '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  'user-plus': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/>',
  'phone': '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  'mail': '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  'copy': '<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  'check': '<polyline points="20 6 9 17 4 12"/>',
  'check-circle': '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
  'alert': '<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',
  'info': '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  'chevron-left': '<path d="m15 18-6-6 6-6"/>',
  'chevron-right': '<path d="m9 18 6-6-6-6"/>',
  'arrow-left': '<line x1="19" x2="5" y1="12" y2="12"/><polyline points="12 19 5 12 12 5"/>',
  'arrow-right': '<line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  'plus': '<path d="M5 12h14"/><path d="M12 5v14"/>',
  'file': '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/>',
  'image': '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',
  'trash': '<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  'edit': '<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>',
  'home': '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  'message': '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
  'star': '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  'shield': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1 1 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  'reset': '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
  'money': '<rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01"/><path d="M18 12h.01"/>',
  'wrench': '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>'
};
function icon(name, size = 18, cls = '') {
  return `<svg class="icon${cls ? ' ' + cls : ''}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${ICONS[name] || ''}</svg>`;
}

/* Iconos por oficio (tarjetas de profesionales y galerías) */
ICONS['hard-hat'] = '<path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1Z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M4 15v-3a6 6 0 0 1 6-6"/><path d="M14 6a6 6 0 0 1 6 6v3"/>';
ICONS['hammer'] = '<path d="m15 12-8.4 8.4a2.1 2.1 0 0 1-3-3L12 9"/><path d="m17.6 14.6 3-3a2 2 0 0 0 0-2.8l-5.4-5.4a2 2 0 0 0-2.8 0l-3 3"/><path d="m9 6 4 4"/><path d="m5 10 4 4"/>';
ICONS['zap'] = '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>';
ICONS['droplet'] = '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>';
ICONS['brush'] = '<path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"/><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3.03-3.02z"/>';
ICONS['link'] = '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>';
ICONS['leaf'] = '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>';
ICONS['car'] = '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>';
ICONS['snowflake'] = '<line x1="2" x2="22" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="22"/><path d="m20 16-4-4 4-4"/><path d="m4 8 4 4-4 4"/><path d="m16 4-4 4-4-4"/><path d="m8 20 4-4 4 4"/>';
ICONS['monitor'] = '<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>';
ICONS['sparkles'] = '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>';
ICONS['scissors'] = '<circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/>';
ICONS['chef-hat'] = '<path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.46.32-.84.73-1.04a4 4 0 0 0-2.13-7.59 5 5 0 0 0-9.2 0 4 4 0 0 0-2.13 7.59c.41.2.73.58.73 1.04V20a1 1 0 0 0 1 1Z"/><path d="M6 17h12"/>';
ICONS['shirt'] = '<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>';
ICONS['truck'] = '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h1a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>';
ICONS['more'] = '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>';

/* ============ 2) CONSTANTES Y CATÁLOGOS ============ */
const JOB_CATEGORIES = ['Administración','Comercio y ventas','Gastronomía','Construcción','Transporte y logística','Industria','Atención al público','Tecnología','Salud','Educación','Servicios generales','Otros'];
const CONTRACT_TYPES = ['Tiempo completo','Medio tiempo','Temporal','Por proyecto','Pasantía'];
const SCHEDULES = ['Jornada completa','Media jornada','Por turnos','Fines de semana','Horario a convenir'];
const ZONES = ['Las Toscas','Las Toscas · zona rural','Romang','Malabrigo','Reconquista','Villa Ocampo','Avellaneda','Región (varias localidades)'];
const PRO_CATEGORIES = ['Albañilería y construcción','Carpintería','Electricidad','Plomería','Pintura','Herrería','Jardinería y mantenimiento','Mecánica','Refrigeración','Informática y reparación de equipos','Limpieza','Peluquería y estética','Gastronomía','Costura','Transporte','Otros servicios'];
const AVAILABILITY = ['Disponible ahora','Agenda limitada','No disponible por ahora'];
const WORK_MODES = ['A domicilio','En taller o local','A distancia','Según el servicio'];
const CONTACT_METHODS = ['WhatsApp','Teléfono','Correo electrónico'];

const TRADE_ICONS = {
  'Albañilería y construcción': 'hard-hat',
  'Carpintería': 'hammer',
  'Electricidad': 'zap',
  'Plomería': 'droplet',
  'Pintura': 'brush',
  'Herrería': 'link',
  'Jardinería y mantenimiento': 'leaf',
  'Mecánica': 'car',
  'Refrigeración': 'snowflake',
  'Informática y reparación de equipos': 'monitor',
  'Limpieza': 'sparkles',
  'Peluquería y estética': 'scissors',
  'Gastronomía': 'chef-hat',
  'Costura': 'shirt',
  'Transporte': 'truck',
  'Otros servicios': 'more'
};
/* ============ 3) UTILIDADES GENERALES ============ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function debounce(fn, ms = 200) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}

function uid(prefix) {
  return (prefix || 'id') + '-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 7);
}

function daysOf(item) {
  return item.createdAt ? Math.floor((Date.now() - item.createdAt) / 86400000) : (item.days || 0);
}

function timeAgo(days) {
  if (days <= 0) return 'Hoy';
  if (days === 1) return 'Ayer';
  if (days < 7) return `Hace ${days} días`;
  if (days < 14) return 'Hace 1 semana';
  if (days < 31) return `Hace ${Math.floor(days / 7)} semanas`;
  return `Hace ${Math.floor(days / 30)} ${Math.floor(days / 30) === 1 ? 'mes' : 'meses'}`;
}

function fmtDate(ts) {
  return new Date(ts).toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function deadlineDate(job) {
  if (!job.deadlineDays && !job.deadline) return null;
  if (job.deadline) return job.deadline;
  const d = new Date();
  d.setDate(d.getDate() + Number(job.deadlineDays));
  return d.toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function initials(name) {
  return name.trim().split(/\s+/).slice(0, 2).map(p => p[0]).join('').toUpperCase();
}

function hashCode(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) { h = (h * 31 + str.charCodeAt(i)) | 0; }
  return Math.abs(h);
}

const AVATAR_COLORS = [
  ['#dce9fb', '#1d5fb8'], ['#e2e8f8', '#3b5bb4'], ['#dff0ec', '#1f6f5f'],
  ['#f3e8f6', '#7d3d8c'], ['#fdeee0', '#9a5a1f'], ['#e4f1e4', '#2f6b3a'],
  ['#e0eef2', '#22637a'], ['#f6e6e6', '#a04a3e']
];
function avatarColors(name) {
  return AVATAR_COLORS[hashCode(name) % AVATAR_COLORS.length];
}

function isValidEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v).trim()); }
function isValidPhone(v) { return /^[+()0-9\s-]{6,22}$/.test(String(v).trim()); }
/* ============ 4) DATOS DE DEMOSTRACIÓN: OFERTAS ============ */
const DEMO_JOBS = [
  {
    id: 'j1', title: 'Repositor/a de almacén', company: 'Almacén El Progreso',
    category: 'Comercio y ventas', contract: 'Medio tiempo', schedule: 'Media jornada',
    zone: 'Las Toscas', salary: '$400.000 aprox.', days: 1, contactMethod: 'WhatsApp',
    short: 'Atención y reposición de góndolas en almacén de barrio, turno mañana.',
    description: 'Buscamos una persona responsable para acompañar la operación diaria de nuestro almacén: reposición de góndolas, control de vencimientos y apoyo en la atención al público en los horarios pico. Es un puesto estable, de lunes a sábado por la mañana.',
    responsibilities: ['Reponer y ordenar la mercadería de las góndolas', 'Controlar fechas de vencimiento y rotación de productos', 'Apoyar la atención en caja en los horarios pico', 'Mantener limpio y ordenado el sector de trabajo'],
    requirements: ['Mayor de 18 años', 'Secundario completo (preferente)', 'Disponibilidad de lunes a sábado por la mañana', 'Experiencia en comercios (no excluyente)'],
    experience: '6 meses (no excluyente)', deadlineDays: 0
  },
  {
    id: 'j2', title: 'Cocinero/a', company: 'Confitería La Estación',
    category: 'Gastronomía', contract: 'Tiempo completo', schedule: 'Por turnos',
    zone: 'Las Toscas', salary: 'A convenir según experiencia', days: 2, contactMethod: 'Teléfono',
    short: 'Cocina general para confitería del centro: platos del día, minutas y eventos.',
    description: 'Para nuestra confitería del centro buscamos cocinero/a para la elaboración de platos del día, minutas y pedidos para eventos de fin de semana. Trabajo en equipo con ayudante de cocina, en un ambiente de buen trato.',
    responsibilities: ['Preparar platos del día y minutas según carta', 'Organizar la mise en place y el cierre de cocina', 'Elaborar pedidos para eventos y para llevar', 'Cuidar la higiene y manipulación de alimentos'],
    requirements: ['Experiencia comprobable en cocina (1 año o más)', 'Conocimientos de higiene y seguridad alimentaria', 'Disponibilidad para turnos rotativos y fines de semana', 'Trabajo en equipo y buen trato con público'],
    experience: '1 año', deadlineDays: 20
  },
  {
    id: 'j3', title: 'Oficial albañil', company: 'Construcciones Rivera',
    category: 'Construcción', contract: 'Por proyecto', schedule: 'Horario a convenir',
    zone: 'Las Toscas', salary: 'A convenir por m² o jornal', days: 3, contactMethod: 'Correo electrónico',
    short: 'Obra de vivienda en zona norte: levante de paredes, revoques y contrapiso.',
    description: 'Necesitamos un oficial albañil para obra de vivienda unifamiliar en la zona norte de la ciudad. Las tareas principales son el levante de paredes, revoques y contrapisos. Posibilidad de continuar en otras etapas de la obra.',
    responsibilities: ['Levantar muros y tabiques según indicaciones', 'Ejecutar revoques gruesos y finos', 'Preparar contrapisos y niveles de piso', 'Cuidar herramientas y mantener el orden de obra'],
    requirements: ['Experiencia como oficial albañil', 'Herramientas propias básicas', 'Responsabilidad y puntualidad', 'Referencias de obras anteriores'],
    experience: '2 años en obras', deadlineDays: 25
  }
];
DEMO_JOBS.push(
  {
    id: 'j4', title: 'Administrativo/a contable', company: 'Estudio Duarte & Asociados',
    category: 'Administración', contract: 'Tiempo completo', schedule: 'Jornada completa',
    zone: 'Reconquista', salary: '$480.000 – $550.000 según experiencia', days: 2, contactMethod: 'Correo electrónico',
    short: 'Carga de comprobantes, atención a clientes y apoyo en liquidaciones de sueldo.',
    description: 'El estudio incorpora personal administrativo para tareas de carga de comprobantes, atención de clientes por teléfono y correo, y apoyo en la confección de liquidaciones de sueldo. Buena oportunidad de aprendizaje para perfiles junior.',
    responsibilities: ['Cargar y ordenar comprobantes y facturas', 'Atender consultas de clientes por teléfono y correo', 'Apoyar en la confección de liquidaciones de sueldo', 'Manejar planillas de cálculo y agendas de vencimientos'],
    requirements: ['Estudios en curso o completos en áreas afines', 'Manejo de planillas de cálculo', 'Buena redacción y ortografía', 'Experiencia administrativa de al menos 1 año'],
    experience: '1 año', deadlineDays: 15
  },
  {
    id: 'j5', title: 'Chofer de reparto', company: 'Transporte Litoral',
    category: 'Transporte y logística', contract: 'Tiempo completo', schedule: 'Jornada completa',
    zone: 'Romang', salary: 'A convenir + viáticos', days: 5, contactMethod: 'WhatsApp',
    short: 'Reparto de mercadería a comercios de la zona con camión de la empresa.',
    description: 'Buscamos chofer para reparto de mercadería a comercios de Romang y localidades cercanas, con camión de la empresa. Rutas cortas, retorno diario. Nos importa la prolijidad en las entregas y el trato con los clientes.',
    responsibilities: ['Realizar los repartos según la planilla diaria', 'Cargar y asegurar correctamente la mercadería', 'Completar remitos y registros de entrega', 'Cuidar el vehículo y reportar novedades'],
    requirements: ['Licencia de conducir categoría C o D vigente', 'Experiencia en reparto (preferente)', 'Residencia en Romang o alrededores', 'Disponibilidad de lunes a sábado'],
    experience: '1 año (preferente)', deadlineDays: 18
  },
  {
    id: 'j6', title: 'Operario/a de producción', company: 'Alimentos del Litoral',
    category: 'Industria', contract: 'Temporal', schedule: 'Por turnos',
    zone: 'Malabrigo', salary: 'Según convenio', days: 4, contactMethod: 'Teléfono',
    short: 'Línea de producción y envasado. Turnos rotativos, con posibilidad de extensión.',
    description: 'Para nuestra planta de Malabrigo incorporamos operario/as de producción y envasado para campaña temporal. Turnos rotativos, con buena posibilidad de continuidad para quienes cumplen con los objetivos.',
    responsibilities: ['Operar y asistir la línea de envasado', 'Controlar calidad y pesaje de los productos', 'Cumplir los protocolos de higiene y seguridad', 'Mantener el puesto de trabajo limpio y ordenado'],
    requirements: ['Mayor de 18 años', 'Secundario en curso o completo', 'Disponibilidad para turnos rotativos', 'Experiencia en industria (no excluyente)'],
    experience: 'No requiere', deadlineDays: 10
  }
);
DEMO_JOBS.push(
  {
    id: 'j7', title: 'Cajero/a con tareas generales', company: 'Farmacia del Centro',
    category: 'Atención al público', contract: 'Medio tiempo', schedule: 'Por turnos',
    zone: 'Las Toscas', salary: 'A convenir', days: 1, contactMethod: 'WhatsApp',
    short: 'Atención en mostrador y caja, turno tarde, de lunes a viernes.',
    description: 'Seleccionamos cajero/a con tareas generales para nuestro local del centro: atención en mostrador, manejo de caja y apoyo al profesional farmacéutico. Turno tarde, de lunes a viernes.',
    responsibilities: ['Atender y cobrar en caja', 'Reponer productos de mostrador', 'Brindar información básica y derivar consultas al profesional', 'Armar pedidos y bolsas'],
    requirements: ['Experiencia en atención al público', 'Manejo de caja o sistemas simples', 'Buen trato y prolijidad', 'Secundario completo'],
    experience: '6 meses', deadlineDays: 12
  },
  {
    id: 'j8', title: 'Desarrollador/a web junior', company: 'Taller Digital del Litoral',
    category: 'Tecnología', contract: 'Por proyecto', schedule: 'Horario a convenir',
    zone: 'Región (varias localidades)', salary: 'Por proyecto, según perfil', days: 6, contactMethod: 'Correo electrónico',
    short: 'Maquetado y mantenimiento de sitios para comercios de la región. Modalidad híbrida.',
    description: 'Buscamos alguien que esté comenzando en el desarrollo web para maquetar landing pages, mantener sitios de clientes y subir contenidos. Trabajo por proyecto, con acompañamiento y revisión conjunta del código.',
    responsibilities: ['Maquetar landing pages y mejoras de sitios existentes', 'Subir contenidos y actualizar secciones', 'Probar funcionalidades en distintos dispositivos', 'Documentar de forma simple las entregas'],
    requirements: ['Conocimientos de HTML, CSS y JavaScript', 'Portfolio o ejemplos de trabajos (aunque sean de estudio)', 'Comunicación clara y cumplimiento de plazos', 'Se valoran nociones de diseño'],
    experience: 'Proyectos personales o de estudio', deadlineDays: 30
  },
  {
    id: 'j9', title: 'Enfermero/a', company: 'Centro de Atención Primaria',
    category: 'Salud', contract: 'Tiempo completo', schedule: 'Por turnos',
    zone: 'Las Toscas', salary: 'Según convenio sanitario provincial', days: 7, contactMethod: 'Correo electrónico',
    short: 'Cobertura de turnos en sala de atención y vacunatorio del centro de salud.',
    description: 'Se necesita enfermero/a profesional para completar el equipo del centro de atención primaria, con cobertura de turnos en sala de espera de consultas, triaje y vacunatorio.',
    responsibilities: ['Asistir en la sala de atención y realizar triaje', 'Aplicar vacunas según calendario', 'Registrar atenciones en el sistema', 'Brindar cuidados básicos y contención a pacientes'],
    requirements: ['Título de Enfermero/a Profesional habilitante', 'Inscripción en jurisdicción sanitaria (o en trámite)', 'Disponibilidad para guardias rotativas', 'Manejo de registros digitales básicos'],
    experience: '1 año (preferente)', deadlineDays: 21
  }
);
DEMO_JOBS.push(
  {
    id: 'j10', title: 'Maestro/a de nivel primario (suplencias)', company: 'Escuela Primaria Pública — Las Toscas',
    category: 'Educación', contract: 'Temporal', schedule: 'Jornada completa',
    zone: 'Las Toscas', salary: 'Según escalafón docente', days: 8, contactMethod: 'Teléfono',
    short: 'Suplencias cortas y de mediano plazo en grados de nivel primario, ciclo lectivo 2026.',
    description: 'La institución necesita cubrir suplencias de maestro/a de grado durante el ciclo lectivo, desde 5 días hasta el resto del año según la situación de cada curso. Se informa novedad con anticipación razonable.',
    responsibilities: ['Acompañar el proceso de enseñanza del grado asignado', 'Registrar asistencia y evaluaciones', 'Mantener comunicación con las familias', 'Participar de las instancias institucionales'],
    requirements: ['Título habilitante de nivel primario', 'Antecedentes en el aula (se valoran)', 'Disponibilidad inmediata', 'Residencia en la localidad o zona cercana'],
    experience: 'Se valoran antecedentes', deadlineDays: 14
  },
  {
    id: 'j11', title: 'Cadete con moto', company: 'Mensajería Costera',
    category: 'Servicios generales', contract: 'Medio tiempo', schedule: 'Media jornada',
    zone: 'Las Toscas', salary: 'Pago por entrega', days: 1, contactMethod: 'WhatsApp',
    short: 'Entregas de pedidos y trámites en la planta urbana, con moto propia.',
    description: 'Buscamos cadete con moto para entregas de pedidos de comercios adheridos y pequeños trámites dentro de la planta urbana. Con turnos de 4 a 6 horas y flexibilidad para estudiantes.',
    responsibilities: ['Realizar entregas y retiros dentro del día', 'Conducir con responsabilidad respetando las normas de tránsito', 'Comunicar novedades de entrega al sector', 'Cuidar los pedidos a cargo'],
    requirements: ['Moto propia en buen estado y casco homologado', 'Licencia A1.1 vigente', 'Conocimiento de la planta urbana', 'Experiencia en reparto (no excluyente)'],
    experience: 'No requiere', deadlineDays: 0
  },
  {
    id: 'j12', title: 'Cuidador/a de mascotas (fines de semana)', company: 'Patitas del Litoral',
    category: 'Otros', contract: 'Por proyecto', schedule: 'Fines de semana',
    zone: 'Las Toscas', salary: 'A convenir por día', days: 3, contactMethod: 'WhatsApp',
    short: 'Cuidado de perros y gatos los fines de semana: paseos, alimentación y juego.',
    description: 'Guardería canina y felina incorpora cuidadores/as para cubrir fines de semana largos y temporadas de vacaciones de los tutores. Puede ser en tu propio domicilio o a espacio abierto, siempre con supervisión.',
    responsibilities: ['Cuidar mascotas siguiendo sus rutinas', 'Respetar pautas de alimentación y medicación', 'Enviar fotos y novedades a los tutores', 'Mantener un entorno seguro y tranquilo'],
    requirements: ['Experiencia demostrable con animales', 'Paciencia y responsabilidad', 'Espacio adecuado y seguro', 'Referencias consultables'],
    experience: 'Se valoran referencias', deadlineDays: 0
  }
);
/* ============ 5) DATOS DE DEMOSTRACIÓN: PROFESIONALES ============ */
const DEMO_PROS = [
  {
    id: 'p1', name: 'Carlos Medina', trade: 'Albañilería y construcción',
    specialties: ['Revoques y cielorrasos', 'Contrapisos y pisos', 'Paredes y cercos'],
    short: 'Oficial albañil con 15 años de obra. Presupuesto sin cargo y trabajo prolijo.',
    about: 'Vivo en Las Toscas y trabajo en la construcción hace más de 15 años, en obras grandes y chicas. Me gusta dejar el trabajo terminado en tiempo y forma, y explico cada etapa antes de empezar.',
    services: ['Levantamiento de paredes y cercos', 'Revoques gruesos y finos', 'Contrapisos y carpeta para pisos', 'Reparaciones y remodelaciones en general'],
    experience: '15 años', zone: 'Las Toscas', availability: 'Disponible ahora', workMode: 'A domicilio',
    phone: '+54 9 3482 55-0101', email: 'carlos.medina@ejemplo.com', whatsapp: true,
    featured: true, photos: 3
  },
  {
    id: 'p2', name: 'Andrea Sosa', trade: 'Electricidad',
    specialties: ['Instalaciones domiciliarias', 'Tableros y llaves', 'Artefactos y luminarias'],
    short: 'Electricista matriculada. Instalaciones, reparaciones y mejoras de seguridad.',
    about: 'Soy electricista instaladora y hago trabajos domiciliarios y en comercios de Las Toscas y alrededores. Trabajo con materiales certificados y entrego garantía escrita de mis instalaciones.',
    services: ['Instalaciones eléctricas nuevas', 'Reparación de cortocircuitos y fallas', 'Colocación de tableros, térmicas y disyuntores', 'Instalación de artefactos y luminarias'],
    experience: '8 años', zone: 'Las Toscas', availability: 'Disponible ahora', workMode: 'A domicilio',
    phone: '+54 9 3482 55-0102', email: 'andrea.sosa@ejemplo.com', whatsapp: true,
    featured: true, photos: 3
  },
  {
    id: 'p3', name: 'Ramón Ferreyra', trade: 'Carpintería',
    specialties: ['Muebles a medida', 'Aberturas y placards', 'Reparaciones de madera'],
    short: 'Taller de carpintería: muebles a medida, arreglos y aberturas de madera.',
    about: 'Aprendí el oficio en el taller de mi familia y lo ejerzo hace 12 años. Fabrico muebles a medida, reparo aberturas y hago trabajos de restauración. Atiendo con turno previo en el taller.',
    services: ['Muebles a medida: bajo mesada, placards y estanterías', 'Puertas, ventanas y marcos de madera', 'Reparación de sillas, mesas y banquetas', 'Pisos de madera y entablonados'],
    experience: '12 años', zone: 'Las Toscas', availability: 'Agenda limitada', workMode: 'En taller o local',
    phone: '+54 9 3482 55-0103', email: 'ramon.ferreyra@ejemplo.com', whatsapp: true,
    featured: true, photos: 4
  }
];
DEMO_PROS.push(
  {
    id: 'p4', name: 'Luis Brítez', trade: 'Plomería',
    specialties: ['Sanitarios', 'Calefones y termotanques', 'Filtraciones'],
    short: 'Instalaciones y urgencias de plomería. Atiende el mismo día según caso.',
    about: 'Hago instalaciones y reparaciones sanitarias en viviendas y comercios. Trato de resolver las urgencias el mismo día y siempre dejo el lugar limpio después del trabajo.',
    services: ['Instalación y reparación de sanitarios', 'Colocación de calefones y termotanques', 'Detección y arreglo de filtraciones', 'Destapaciones y mantenimiento preventivo'],
    experience: '10 años', zone: 'Las Toscas', availability: 'Disponible ahora', workMode: 'A domicilio',
    phone: '+54 9 3482 55-0104', email: '', whatsapp: true,
    featured: false, photos: 2
  },
  {
    id: 'p5', name: 'Marcela Ojeda', trade: 'Pintura',
    specialties: ['Interiores y exteriores', 'Enduidos y texturados', 'Frentes y rejas'],
    short: 'Pintura en general con acabados prolijos. Presupuestos por m² sin cargo.',
    about: 'Pinto casas, locales y frentes hace 9 años. Me ocupo de la preparación de superficies —enduido y lijanado— porque considero que ahí empieza un buen trabajo. Trabajo sola o con una ayudante según la escala.',
    services: ['Pintura interior y exterior', 'Enduidos, lijanados y texturados', 'Pintura de frentes y rejas', 'Barnizados y restauración de aberturas'],
    experience: '9 años', zone: 'Región (varias localidades)', availability: 'Disponible ahora', workMode: 'A domicilio',
    phone: '+54 9 3482 55-0105', email: 'marcela.ojeda@ejemplo.com', whatsapp: true,
    featured: false, photos: 3
  },
  {
    id: 'p6', name: 'Hugo Ledesma', trade: 'Herrería',
    specialties: ['Rejas y portones', 'Estructuras livianas', 'Soldadura'],
    short: 'Rejas, portones, estructuras y reparaciones. Trabajo a medida en taller.',
    about: 'Herrería de obra y artística: fabrico y reparo rejas, portones, carpas y estructuras livianas. Tomo medidas en el lugar, fabrico en mi taller y la colocación está incluida.',
    services: ['Rejas, portones y barandales', 'Estructuras para techos y carpas', 'Soldadura en general', 'Reparación de portones y aberturas metálicas'],
    experience: '18 años', zone: 'Las Toscas', availability: 'No disponible por ahora', workMode: 'En taller o local',
    phone: '+54 9 3482 55-0106', email: '', whatsapp: false,
    featured: false, photos: 2
  },
  {
    id: 'p7', name: 'Sonia Villalba', trade: 'Jardinería y mantenimiento',
    specialties: ['Parques y jardines', 'Poda y riego', 'Mantenimiento mensual'],
    short: 'Diseño y mantenimiento de parques y jardines. Planes mensuales de cuidado.',
    about: 'Soy jardinera con formación de vivero. Me encanta transformar espacios verdes chicos en lugares para disfrutar. Ofrezco planes de mantenimiento mensual para casas e instituciones.',
    services: ['Diseño y parquización de espacios verdes', 'Poda de arbustos y setos', 'Instalación y ajuste de riego', 'Mantenimiento mensual de jardines'],
    experience: '7 años', zone: 'Las Toscas', availability: 'Disponible ahora', workMode: 'A domicilio',
    phone: '+54 9 3482 55-0107', email: 'sonia.villalba@ejemplo.com', whatsapp: true,
    featured: true, photos: 3
  }
);
DEMO_PROS.push(
  {
    id: 'p8', name: 'Damián Ayala', trade: 'Mecánica',
    specialties: ['Inyección electrónica', 'Frenos y suspensión', 'Service general'],
    short: 'Mecánica integral de autos y utilitarios. Diagnóstico honesto y claro.',
    about: 'Taller mecánico con 14 años de recorrido en Las Toscas. Trabajo con presupuestos claros: primero diagnóstico, después arreglo. Atención especial en inyección electrónica y frenos.',
    services: ['Service general de motor', 'Frenos, amortiguación y suspensión', 'Diagnóstico de inyección electrónica', 'Electricidad del automotor'],
    experience: '14 años', zone: 'Las Toscas', availability: 'Agenda limitada', workMode: 'En taller o local',
    phone: '+54 9 3482 55-0108', email: 'damian.ayala@ejemplo.com', whatsapp: true,
    featured: false, photos: 2
  },
  {
    id: 'p9', name: 'Fabián Ríos', trade: 'Refrigeración',
    specialties: ['Aires acondicionados', 'Heladeras y freezers', 'Cámaras comerciales'],
    short: 'Instalación y reparación de aires y equipos de frío, hogareños y comerciales.',
    about: 'Técnico refrigerista. Instalo y reparo aires acondicionados, heladeras familiares y equipamiento comercial. Trabajo con gases habilitados y entrego comprobante de service.',
    services: ['Instalación y carga de aires acondicionados', 'Reparación de heladeras y freezers', 'Mantenimiento de cámaras y exhibidoras', 'Service de pretemporada para aires'],
    experience: '11 años', zone: 'Región (varias localidades)', availability: 'Disponible ahora', workMode: 'A domicilio',
    phone: '+54 9 3482 55-0109', email: 'fabian.rios@ejemplo.com', whatsapp: true,
    featured: true, photos: 3
  },
  {
    id: 'p10', name: 'Valeria Gómez', trade: 'Informática y reparación de equipos',
    specialties: ['Notebooks y PC', 'Impresoras', 'Virus y formateo'],
    short: 'Reparación de PC, notebooks e impresoras. Atiendo con turno previo.',
    about: 'Técnica en informática. Me especializo en recuperación de equipos de uso diario: notebooks que no encienden, impresoras atascadas, equipos lentos. Presupuesto antes de reparar, siempre.',
    services: ['Formateo e instalación de programas', 'Limpieza de virus y optimización', 'Reparación de notebooks y PC de escritorio', 'Mantenimiento de impresoras'],
    experience: '6 años', zone: 'Las Toscas', availability: 'Disponible ahora', workMode: 'En taller o local',
    phone: '+54 9 3482 55-0110', email: 'valeria.gomez@ejemplo.com', whatsapp: true,
    featured: false, photos: 2
  },
  {
    id: 'p11', name: 'Rosa Chamorro', trade: 'Limpieza',
    specialties: ['Casas y departamentos', 'Oficinas y comercios', 'Limpieza post obra'],
    short: 'Limpieza profunda de casas, oficinas y obras terminadas. Puntualidad y confianza.',
    about: 'Trabajo en limpieza hace más de una década para familias y comercios de la ciudad. Hago limpiezas profundas, post obra y mantenimiento periódico. Cuento con recomendaciones verificables.',
    services: ['Limpieza profunda de viviendas', 'Oficinas y locales comerciales', 'Limpieza post obra', 'Lavado y desmanchado de tapizados'],
    experience: '12 años', zone: 'Las Toscas', availability: 'Disponible ahora', workMode: 'A domicilio',
    phone: '+54 9 3482 55-0111', email: '', whatsapp: true,
    featured: false, photos: 0
  }
);
DEMO_PROS.push(
  {
    id: 'p12', name: 'Mirta Benítez', trade: 'Peluquería y estética',
    specialties: ['Cortes y color', 'Peinados de evento', 'Tratamientos capilares'],
    short: 'Peluquería para mujeres, varones y niños. Turnos de lunes a sábado.',
    about: 'Tengo mi salón en el centro de Las Toscas hace 10 años. Me actualizo constantemente en color y tratamientos. Los eventos —quinces y casamientos— se agendan con anticipación.',
    services: ['Cortes, color y mechas', 'Peinados para eventos y fiestas', 'Tratamientos capilares', 'Atención de niños y toda la familia'],
    experience: '10 años', zone: 'Las Toscas', availability: 'Disponible ahora', workMode: 'En taller o local',
    phone: '+54 9 3482 55-0112', email: 'mirta.benitez@ejemplo.com', whatsapp: true,
    featured: false, photos: 3
  },
  {
    id: 'p13', name: 'Julio Cáceres', trade: 'Gastronomía',
    specialties: ['Catering para eventos', 'Tortas y postres', 'Comida casera por encargo'],
    short: 'Catering y pastelería por encargo para cumpleaños, casamientos y eventos.',
    about: 'Cocinero y pastelero. Armo menús para eventos chicos y medianos, tortas por encargo y mesas dulces. Uso ingredientes frescos de la zona y me adapto a los presupuestos.',
    services: ['Catering para eventos y reuniones', 'Tortas y postres por encargo', 'Mesas dulces temáticas', 'Viandas y comida casera por encargo'],
    experience: '9 años', zone: 'Las Toscas', availability: 'Agenda limitada', workMode: 'Según el servicio',
    phone: '+54 9 3482 55-0113', email: 'julio.caceres@ejemplo.com', whatsapp: true,
    featured: false, photos: 4
  },
  {
    id: 'p14', name: 'Elena Ramírez', trade: 'Costura',
    specialties: ['Arreglos de ropa', 'Cortinados y fundas', 'Confección a medida'],
    short: 'Arreglos de ropa, cortinados y confección a medida. Retiro y entrego a domicilio.',
    about: 'Modista con 20 años de experiencia. Hago arreglos en el día cuando se puede, confecciono cortinados, uniformes y prendas a medida. Retiro y entrego sin cargo dentro de la planta urbana.',
    services: ['Arreglos y ajustes de ropa', 'Cortinados y fundas', 'Uniformes escolares y de trabajo', 'Prendas confeccionadas a medida'],
    experience: '20 años', zone: 'Las Toscas', availability: 'Disponible ahora', workMode: 'A domicilio',
    phone: '+54 9 3482 55-0114', email: '', whatsapp: false,
    featured: false, photos: 2
  },
  {
    id: 'p15', name: 'Pedro Franco', trade: 'Transporte',
    specialties: ['Fletes y mudanzas', 'Acarreo de materiales', 'Traslado de muebles'],
    short: 'Fletes y mudanzas con utilitario. Tarifas justas dentro y fuera de la ciudad.',
    about: 'Hago fletes con utilitario cerrado: mudanzas chicas, acarreo de materiales y traslado de muebles. Cuento con ayudante a pedido y protección para la carga.',
    services: ['Fletes dentro y fuera de la ciudad', 'Mudanzas de departamentos y oficinas', 'Acarreo de materiales de construcción', 'Traslado de muebles y electrodomésticos'],
    experience: '8 años', zone: 'Región (varias localidades)', availability: 'Disponible ahora', workMode: 'A domicilio',
    phone: '+54 9 3482 55-0115', email: 'pedro.franco@ejemplo.com', whatsapp: true,
    featured: false, photos: 2
  }
);
/* ============ 6) ILUSTRACIONES DE TRABAJOS Y STORE ============ */
/* Nunca se usan retratos personales: las fotos de demostración son
   ilustraciones SVG generadas con el ícono del oficio. */
const PHOTO_PALETTES = [
  ['#e6eefb', '#c9dcf5', '#1d5fb8'],
  ['#e9f1e9', '#cfe4cf', '#2f6b3a'],
  ['#fdf3e3', '#f3e0b8', '#9a6a1f'],
  ['#f2ecf9', '#ddcbf0', '#5b3d8f'],
  ['#e8f4f4', '#c9e6e6', '#1f6f6f'],
  ['#f8ecef', '#f0d3da', '#94395c']
];

function workPhotoUrl(pro, i) {
  const seed = hashCode((pro.id || '') + (pro.name || ''));
  const p = PHOTO_PALETTES[(seed + i) % PHOTO_PALETTES.length];
  const iconName = TRADE_ICONS[pro.trade] || 'wrench';
  const paths = ICONS[iconName] || ICONS['wrench'];
  const rot = ((seed + i * 37) % 24) - 12;
  const cx = 200 + ((seed % 3) - 1) * 16;
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 360" role="img">' +
    `<rect width="480" height="360" fill="${p[0]}"/>` +
    `<circle cx="72" cy="76" r="112" fill="${p[1]}" opacity="0.7"/>` +
    `<circle cx="420" cy="304" r="130" fill="${p[1]}" opacity="0.5"/>` +
    `<g transform="translate(${cx},108) rotate(${rot})">` +
    '<rect x="-86" y="-86" width="172" height="172" rx="26" fill="#ffffff" opacity="0.92"/>' +
    `<g transform="translate(-48,-48) scale(4)" fill="none" stroke="${p[2]}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths}</g>` +
    '</g></svg>';
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

function proPhotos(pro) {
  if (Array.isArray(pro.photos)) return pro.photos;
  const n = Math.max(0, Number(pro.photos) || 0);
  return Array.from({ length: n }, (_, i) => workPhotoUrl(pro, i));
}

/* ============ 7) STORE (localStorage, solo metadatos) ============ */
const Store = {
  KEYS: {
    jobs: 'empleoLocal:ofertas',
    pros: 'empleoLocal:perfiles',
    apps: 'empleoLocal:postulaciones'
  },
  _read(key) {
    try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; }
  },
  _write(key, list) {
    try { localStorage.setItem(key, JSON.stringify(list)); return true; } catch { return false; }
  },
  /* Ofertas creadas por el usuario */
  getJobs() { return this._read(this.KEYS.jobs); },
  saveJob(job) {
    const list = this.getJobs();
    const i = list.findIndex(j => j.id === job.id);
    if (i >= 0) list[i] = job; else list.unshift(job);
    return this._write(this.KEYS.jobs, list) ? 'ok' : 'error';
  },
  deleteJob(id) {
    this._write(this.KEYS.jobs, this.getJobs().filter(j => j.id !== id));
  },
  /* Perfiles creados por el usuario (las fotos se comprimen; si la cuota
     de localStorage se agota, se guardan sin fotos y se avisa). */
  getPros() { return this._read(this.KEYS.pros); },
  savePro(pro) {
    const list = this.getPros();
    const i = list.findIndex(p => p.id === pro.id);
    if (i >= 0) list[i] = pro; else list.unshift(pro);
    if (this._write(this.KEYS.pros, list)) return 'ok';
    const light = { ...pro, photos: [] };
    if (i >= 0) list[i] = light; else list[0] = light;
    if (this._write(this.KEYS.pros, list)) return 'noPhotos';
    return 'error';
  },
  deletePro(id) {
    this._write(this.KEYS.pros, this.getPros().filter(p => p.id !== id));
  },
  /* Postulaciones simuladas: SIN datos personales ni currículums */
  getApps() { return this._read(this.KEYS.apps); },
  addApp(app) {
    const list = this.getApps();
    list.unshift(app);
    return this._write(this.KEYS.apps, list);
  },
  removeApp(id) {
    this._write(this.KEYS.apps, this.getApps().filter(a => a.id !== id));
  },
  hasApplied(jobId) { return this.getApps().some(a => a.jobId === jobId); }
};

/* ============ 8) ESTADO DE LA APLICACIÓN ============ */
const jobsState = { q: '', cat: '', contract: '', schedule: '', zone: '', sort: 'recent' };
const prosState = { q: '', cat: '', zone: '', avail: '', sort: 'relevant' };
const lightboxData = { photos: [], index: 0, lastFocus: null };
const sessionPhotos = {}; /* fotos en memoria cuando localStorage no alcanza */
let editingProId = null;
let editingJobId = null;

function getAllJobs() { return [...Store.getJobs(), ...DEMO_JOBS]; }
function getAllPros() { return [...Store.getPros(), ...DEMO_PROS]; }
function getJobById(id) { return getAllJobs().find(j => j.id === id) || null; }
function getProById(id) { return getAllPros().find(p => p.id === id) || null; }
function photosOf(pro) {
  return Array.isArray(pro.photos) && pro.photos.length ? pro.photos
    : (sessionPhotos[pro.id] && sessionPhotos[pro.id].length ? sessionPhotos[pro.id] : proPhotos(pro));
}
/* ============ 9) UI: TOASTS, MODALES, LIGHTBOX, MENÚ ============ */
function toast(msg, type = 'info') {
  const root = $('#toast-root');
  const el = document.createElement('div');
  el.className = `toast toast-${type}`;
  const iconName = type === 'success' ? 'check-circle' : (type === 'error' ? 'alert' : 'info');
  el.innerHTML = `${icon(iconName, 19)}<span>${esc(msg)}</span><button class="toast-close" type="button" aria-label="Cerrar aviso">${icon('x', 16)}</button>`;
  el.querySelector('.toast-close').addEventListener('click', () => el.remove());
  root.appendChild(el);
  setTimeout(() => { if (el.parentNode) el.remove(); }, 4600);
}

const Modal = {
  lastFocus: null,
  open(title, bodyHtml, onMount) {
    this.lastFocus = document.activeElement;
    $('#modal-title').textContent = title;
    $('#modal-body').innerHTML = bodyHtml;
    $('#modal-backdrop').hidden = false;
    document.body.style.overflow = 'hidden';
    const first = $('#modal-body').querySelector('input, select, textarea, button:not(#modal-close)');
    (first || $('#modal-close')).focus();
    if (typeof onMount === 'function') onMount($('#modal-body'));
  },
  close() {
    $('#modal-backdrop').hidden = true;
    $('#modal-body').innerHTML = '';
    document.body.style.overflow = '';
    if (this.lastFocus && document.contains(this.lastFocus)) this.lastFocus.focus();
    this.lastFocus = null;
  },
  isOpen() { return !$('#modal-backdrop').hidden; }
};

function confirmDialog(title, message, confirmLabel, onConfirm) {
  Modal.open(title,
    `<p style="margin-bottom:18px">${esc(message)}</p>
     <div class="form-actions">
       <button class="btn btn-ghost" type="button" data-modal-cancel>Cancelar</button>
       <button class="btn btn-danger" type="button" data-modal-confirm>${esc(confirmLabel)}</button>
     </div>`,
    (body) => {
      body.querySelector('[data-modal-cancel]').addEventListener('click', () => Modal.close());
      body.querySelector('[data-modal-confirm]').addEventListener('click', () => { Modal.close(); onConfirm(); });
    });
}

/* Copia texto al portapapeles con alternativa para entornos sin API */
function copyText(text, okMsg) {
  const done = () => toast(okMsg || 'Copiado al portapapeles.', 'success');
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
  } else {
    fallbackCopy(text, done);
  }
}
function fallbackCopy(text, done) {
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
    done();
  } catch {
    toast('No se pudo copiar automáticamente. Teléfono: ' + text, 'error');
  }
}

function whatsappDemoNotice(pro) {
  toast(`Demostración: el teléfono de ${pro.name.split(' ')[0]} es ficticio (${pro.phone}). En la versión real, este botón abriría WhatsApp.`, 'info');
}

/* ============ 10) LIGHTBOX ============ */
function openLightbox(photos, index, altBase) {
  lightboxData.photos = photos;
  lightboxData.index = index;
  lightboxData.altBase = altBase || 'Foto de trabajo';
  lightboxData.lastFocus = document.activeElement;
  renderLightbox();
  $('#lightbox').hidden = false;
  document.body.style.overflow = 'hidden';
  $('#lb-close').focus();
}
function renderLightbox() {
  const { photos, index } = lightboxData;
  const img = $('#lb-img');
  img.src = photos[index];
  img.alt = `${lightboxData.altBase} (${index + 1} de ${photos.length})`;
  $('#lb-cap').textContent = `Ilustración · ${index + 1} de ${photos.length}`;
  const multiple = photos.length > 1;
  $('#lb-prev').hidden = !multiple;
  $('#lb-next').hidden = !multiple;
}
function closeLightbox() {
  $('#lightbox').hidden = true;
  document.body.style.overflow = '';
  if (lightboxData.lastFocus && document.contains(lightboxData.lastFocus)) lightboxData.lastFocus.focus();
}
function lightboxMove(dir) {
  const n = lightboxData.photos.length;
  lightboxData.index = (lightboxData.index + dir + n) % n;
  renderLightbox();
}

/* ============ 11) MENÚ LATERAL (DRAWER) ============ */
const Drawer = {
  open() {
    $('#drawer').hidden = false;
    $('#drawer-backdrop').hidden = false;
    $('#menu-btn').setAttribute('aria-expanded', 'true');
    $('#drawer-close').focus();
  },
  close() {
    $('#drawer').hidden = true;
    $('#drawer-backdrop').hidden = true;
    $('#menu-btn').setAttribute('aria-expanded', 'false');
    $('#menu-btn').focus();
  },
  isOpen() { return !$('#drawer').hidden; }
};
/* ============ 12) COMPONENTES REUTILIZABLES ============ */
function badgeAvail(av) {
  const cls = av === AVAILABILITY[0] ? 'badge avail-1' : (av === AVAILABILITY[1] ? 'badge avail-2' : 'badge avail-3');
  return `<span class="${cls}">${esc(av)}</span>`;
}

function avatarHtml(pro, extraCls = '') {
  const [bg, fg] = avatarColors(pro.name);
  return `<span class="avatar ${extraCls}" style="background:${bg};color:${fg}" aria-hidden="true">${esc(initials(pro.name))}</span>`;
}

function jobCard(job) {
  const reqs = (job.requirements || []).slice(0, 2).join(' · ');
  return `<article class="card job-card">
    <div class="job-card-top">
      <span class="badge badge-soft">${esc(job.category)}</span>
      <span class="job-date">${esc(timeAgo(daysOf(job)))}</span>
    </div>
    <h3><a href="#/empleos/${esc(job.id)}">${esc(job.title)}</a></h3>
    <p class="job-company">${icon('briefcase', 15)}${esc(job.company)}</p>
    <p class="job-desc">${esc(job.short)}</p>
    <div class="job-meta">
      <span>${icon('map-pin', 14)}${esc(job.zone)}</span>
      <span>${icon('clock', 14)}${esc(job.contract)} · ${esc(job.schedule)}</span>
    </div>
    ${reqs ? `<p class="job-req"><strong>Requisitos:</strong> ${esc(reqs)}</p>` : ''}
    <div class="card-actions">
      <a class="btn btn-outline btn-sm" href="#/empleos/${esc(job.id)}">Consultar oferta</a>
    </div>
  </article>`;
}

function proCard(pro) {
  const photos = photosOf(pro).slice(0, 3);
  return `<article class="card pro-card">
    <div class="pro-head">
      ${avatarHtml(pro)}
      <div class="pro-head-info">
        <h3><a href="#/profesionales/${esc(pro.id)}">${esc(pro.name)}</a></h3>
        <p class="pro-trade">${icon(TRADE_ICONS[pro.trade] || 'wrench', 15)}${esc(pro.trade)}</p>
      </div>
      ${badgeAvail(pro.availability)}
    </div>
    <p class="pro-specs"><strong>Especialidades:</strong> ${esc(pro.specialties.join(' · '))}</p>
    <p class="pro-desc">${esc(pro.short)}</p>
    <p class="pro-zone">${icon('map-pin', 14)}${esc(pro.zone)}</p>
    ${photos.length ? `<div class="pro-thumbs">${photos.map((src, i) =>
      `<img src="${src}" alt="Trabajo de ${esc(pro.name)} ${i + 1}" loading="lazy">`).join('')}</div>` : ''}
    <div class="card-actions">
      <a class="btn btn-outline btn-sm" href="#/profesionales/${esc(pro.id)}">Ver perfil</a>
      <button class="btn btn-primary btn-sm" type="button" data-contact="${esc(pro.id)}">Contactar</button>
    </div>
  </article>`;
}

function emptyState(iconName, title, text, actionsHtml = '') {
  return `<div class="empty-state">
    <span class="empty-icon">${icon(iconName, 26)}</span>
    <h3>${esc(title)}</h3>
    <p>${esc(text)}</p>
    ${actionsHtml ? `<div class="card-actions">${actionsHtml}</div>` : ''}
  </div>`;
}

function fillSelect(sel, options, placeholder) {
  sel.innerHTML = '';
  if (placeholder !== undefined) {
    const opt = document.createElement('option');
    opt.value = '';
    opt.textContent = placeholder;
    sel.appendChild(opt);
  }
  options.forEach(o => {
    const opt = document.createElement('option');
    opt.value = o;
    opt.textContent = o;
    sel.appendChild(opt);
  });
}

/* Validación accesible: marca el campo y muestra el mensaje asociado */
function setFieldError(input, msg) {
  input.classList.toggle('invalid', !!msg);
  input.setAttribute('aria-invalid', msg ? 'true' : 'false');
  const err = document.getElementById(input.id + '-err');
  if (err) {
    err.textContent = msg || '';
    err.classList.toggle('visible', !!msg);
    if (msg) input.setAttribute('aria-describedby', err.id);
    else input.removeAttribute('aria-describedby');
  }
}

function validateField(input, checks) {
  const value = (input.type === 'checkbox') ? '' : String(input.value || '').trim();
  let msg = '';
  for (const c of checks) {
    if (c.required && !value) { msg = c.msg || 'Este campo es obligatorio.'; break; }
    if (c.min && value && value.length < c.min) { msg = c.msg || `Ingresá al menos ${c.min} caracteres.`; break; }
    if (c.email && value && !isValidEmail(value)) { msg = 'Ingresá un correo válido (ej.: nombre@ejemplo.com).'; break; }
    if (c.phone && value && !isValidPhone(value)) { msg = 'Ingresá un teléfono válido (ej.: +54 9 3482 55-0000).'; break; }
    if (c.dateFuture && value) {
      const d = new Date(value + 'T12:00:00');
      const today = new Date(); today.setHours(0, 0, 0, 0);
      if (Number.isNaN(d.getTime()) || d < today) { msg = 'La fecha debe ser de hoy en adelante.'; break; }
    }
  }
  setFieldError(input, msg);
  return !msg;
}

function scrollToTop() {
  window.scrollTo(0, 0);
}
/* ============ 13) VISTA: INICIO ============ */
const Views = {
  home() {
    const jobs = [...DEMO_JOBS].sort((a, b) => a.days - b.days).slice(0, 4);
    $('#home-jobs').innerHTML = jobs.map(jobCard).join('');
    const pros = DEMO_PROS.filter(p => p.featured).slice(0, 3);
    $('#home-pros').innerHTML = pros.map(proCard).join('');
  }
};

/* ============ 14) VISTA: BUSCAR EMPLEO ============ */
function jobsCountActive() {
  return ['cat', 'contract', 'schedule', 'zone'].filter(k => jobsState[k]).length;
}

function applyJobFilters() {
  const q = jobsState.q.trim().toLowerCase();
  let list = getAllJobs().filter(j => {
    if (jobsState.cat && j.category !== jobsState.cat) return false;
    if (jobsState.contract && j.contract !== jobsState.contract) return false;
    if (jobsState.schedule && j.schedule !== jobsState.schedule) return false;
    if (jobsState.zone && j.zone !== jobsState.zone) return false;
    if (q) {
      const hay = [j.title, j.company, j.short, j.description, (j.requirements || []).join(' ')]
        .join(' ').toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
  list.sort((a, b) => jobsState.sort === 'oldest' ? daysOf(b) - daysOf(a) : daysOf(a) - daysOf(b));
  return list;
}

function renderJobsList() {
  const list = applyJobFilters();
  const count = $('#jobs-count');
  count.textContent = list.length === 0
    ? 'Sin resultados'
    : `${list.length} ${list.length === 1 ? 'oferta encontrada' : 'ofertas encontradas'}`;
  const box = $('#jobs-list');
  if (!list.length) {
    box.innerHTML = emptyState('search', 'No encontramos ofertas con esos filtros',
      'Probá con otra palabra clave o ampliá los filtros. También podés limpiar todo y empezar de nuevo.',
      `<button class="btn btn-outline btn-sm" type="button" id="jobs-empty-clear">${icon('reset', 16)}Limpiar filtros</button>`);
    $('#jobs-empty-clear').addEventListener('click', () => { resetJobsFilters(); });
  } else {
    box.innerHTML = list.map(jobCard).join('');
  }
  const chip = $('#jobs-filter-count');
  const n = jobsCountActive();
  chip.hidden = n === 0;
  chip.textContent = n;
}

function resetJobsFilters() {
  Object.assign(jobsState, { q: '', cat: '', contract: '', schedule: '', zone: '', sort: 'recent' });
  $('#jobs-search').value = '';
  $('#jobs-cat').value = '';
  $('#jobs-contract').value = '';
  $('#jobs-schedule').value = '';
  $('#jobs-zone').value = '';
  $('#jobs-sort').value = 'recent';
  renderJobsList();
}

function setupJobsView() {
  fillSelect($('#jobs-cat'), JOB_CATEGORIES, 'Todas las categorías');
  fillSelect($('#jobs-contract'), CONTRACT_TYPES, 'Todos');
  fillSelect($('#jobs-schedule'), SCHEDULES, 'Toda jornada');
  const zones = [...new Set(getAllJobs().map(j => j.zone))];
  fillSelect($('#jobs-zone'), zones, 'Toda la zona');
  $('#jobs-sort').value = jobsState.sort;

  $('#jobs-search').addEventListener('input', debounce(e => {
    jobsState.q = e.target.value;
    renderJobsList();
  }, 200));
  $('#jobs-cat').addEventListener('change', e => { jobsState.cat = e.target.value; renderJobsList(); });
  $('#jobs-contract').addEventListener('change', e => { jobsState.contract = e.target.value; renderJobsList(); });
  $('#jobs-schedule').addEventListener('change', e => { jobsState.schedule = e.target.value; renderJobsList(); });
  $('#jobs-zone').addEventListener('change', e => { jobsState.zone = e.target.value; renderJobsList(); });
  $('#jobs-sort').addEventListener('change', e => { jobsState.sort = e.target.value; renderJobsList(); });
  $('#jobs-clear').addEventListener('click', resetJobsFilters);
  $('#jobs-apply').addEventListener('click', () => {
    renderJobsList();
    toggleFilterPanel('jobs', false);
  });
}

/* Panel de filtros: plegable en mobile, sidebar fija en desktop */
function toggleFilterPanel(which, force) {
  const panel = $(which === 'jobs' ? '#jobs-filter-panel' : '#pros-filter-panel');
  const btn = $(which === 'jobs' ? '#jobs-filter-toggle' : '#pros-filter-toggle');
  const show = force !== undefined ? force : panel.hidden;
  panel.hidden = !show;
  btn.setAttribute('aria-expanded', String(show));
}
/* ============ 15) VISTA: DETALLE DE OFERTA + POSTULACIÓN ============ */
function jobDetailHtml(job) {
  const dl = (ic, label, value) => value ? `<div>${icon(ic, 16)}<div><dt>${label}</dt><dd>${esc(value)}</dd></div></div>` : '';
  const deadline = deadlineDate(job);
  const applied = Store.hasApplied(job.id);
  const list = (arr) => arr.map(x => `<li>${esc(x)}</li>`).join('');
  const contactNote = {
    'WhatsApp': 'El contacto indicado es por WhatsApp.',
    'Teléfono': 'El contacto indicado es por llamada telefónica.',
    'Correo electrónico': 'El contacto indicado es por correo electrónico.'
  }[job.contactMethod] || '';

  return `<article class="detail-card">
    <div class="detail-top">
      <span class="badge badge-soft">${esc(job.category)}</span>
      <span class="badge badge-warn">${esc(job.contract)}</span>
      <span class="job-date">Publicada ${esc(timeAgo(daysOf(job)).toLowerCase())}</span>
    </div>
    <h1 class="detail-title">${esc(job.title)}</h1>
    <p class="detail-company">${icon('briefcase', 17)}${esc(job.company)} · Empleador de demostración</p>
    <dl class="info-grid">
      ${dl('map-pin', 'Ubicación', job.zone)}
      ${dl('clock', 'Jornada / horario', job.schedule)}
      ${dl('briefcase', 'Tipo de contratación', job.contract)}
      ${dl('money', 'Remuneración', job.salary)}
      ${dl('calendar', 'Cierre de la búsqueda', deadline)}
      ${dl('star', 'Experiencia requerida', job.experience)}
    </dl>
    <section class="detail-section">
      <h2>Sobre el puesto</h2>
      <p>${esc(job.description)}</p>
    </section>
    <section class="detail-section">
      <h2>Responsabilidades</h2>
      <ul class="check-list">${list(job.responsibilities || [])}</ul>
    </section>
    <section class="detail-section">
      <h2>Requisitos</h2>
      <ul class="check-list">${list(job.requirements || [])}</ul>
    </section>
    ${contactNote ? `<p class="muted" style="font-size:.88rem">${icon('info', 15)} ${esc(contactNote)}</p>` : ''}
    <p class="demo-note">Oferta de demostración: la empresa y los datos son ficticios y la postulación no se envía a ningún servidor.</p>
  </article>
  <div class="cta-bar">
    ${applied
      ? `<button class="btn btn-primary btn-lg" type="button" disabled>${icon('check-circle', 18)}Ya te postulaste a esta oferta</button>
         <span class="cta-note">Tu postulación simulada quedó registrada en «Mis publicaciones». Podés eliminarla desde ahí.</span>`
      : `<button class="btn btn-primary btn-lg" type="button" id="apply-btn">${icon('file', 18)}Postularme</button>
         <span class="cta-note">Se solicita tu currículum en PDF. En este prototipo, el archivo no se sube a ningún servidor.</span>`}
  </div>`;
}
function openApplicationModal(job) {
  Modal.open('Postularme: ' + job.title, `
    <div class="notice notice-info" style="margin-bottom:16px">
      ${icon('info', 18)}
      <p><strong>Demostración:</strong> tus datos no se guardan ni se envían. Solo se registra, en este navegador, que te postulaste a esta oferta.</p>
    </div>
    <form id="apply-form" novalidate>
      <div class="field">
        <label for="ap-name">Nombre y apellido *</label>
        <input id="ap-name" type="text" maxlength="70" autocomplete="name">
        <p class="field-error" id="ap-name-err"></p>
      </div>
      <div class="field">
        <label for="ap-email">Correo electrónico *</label>
        <input id="ap-email" type="email" maxlength="80" autocomplete="email">
        <p class="field-error" id="ap-email-err"></p>
      </div>
      <div class="field">
        <label for="ap-phone">Teléfono *</label>
        <input id="ap-phone" type="tel" maxlength="22" autocomplete="tel">
        <p class="field-error" id="ap-phone-err"></p>
      </div>
      <div class="field">
        <label for="ap-msg">Breve presentación <span class="optional">(opcional)</span></label>
        <textarea id="ap-msg" maxlength="400" placeholder="Contá en dos o tres líneas por qué te interesa el puesto."></textarea>
        <p class="field-error" id="ap-msg-err"></p>
      </div>
      <div class="field">
        <label for="ap-cv">Currículum en PDF *</label>
        <input id="ap-cv" type="file" accept="application/pdf,.pdf">
        <p class="hint">Solo se acepta PDF de hasta 5 MB. El archivo no se sube ni se almacena.</p>
        <p class="field-error" id="ap-cv-err"></p>
      </div>
      <div class="form-actions">
        <button class="btn btn-ghost" type="button" data-modal-cancel>Cancelar</button>
        <button class="btn btn-primary" type="submit">Enviar postulación</button>
      </div>
    </form>`, (body) => {
    const form = body.querySelector('#apply-form');
    body.querySelector('[data-modal-cancel]').addEventListener('click', () => Modal.close());
    const cv = body.querySelector('#ap-cv');
    const checkCv = (f) => {
      if (!f) return 'Adjuntá tu currículum en PDF.';
      if (!(f.type === 'application/pdf' || /\.pdf$/i.test(f.name))) return 'El currículum debe ser un archivo PDF.';
      if (f.size > 5 * 1024 * 1024) return 'El PDF supera el máximo de 5 MB.';
      return '';
    };
    cv.addEventListener('change', () => setFieldError(cv, checkCv(cv.files && cv.files[0])));
    form.addEventListener('submit', e => {
      e.preventDefault();
      const ok = [
        validateField(body.querySelector('#ap-name'), [{ required: true, min: 3, msg: 'Ingresá tu nombre y apellido.' }]),
        validateField(body.querySelector('#ap-email'), [{ required: true, email: true }]),
        validateField(body.querySelector('#ap-phone'), [{ required: true, phone: true }])
      ].every(Boolean);
      const cvMsg = checkCv(cv.files && cv.files[0]);
      setFieldError(cv, cvMsg);
      if (!(ok && !cvMsg)) return;
      Store.addApp({ id: uid('app'), jobId: job.id, jobTitle: job.title, date: Date.now(), status: 'Simulada' });
      Modal.close();
      toast('Postulación enviada (simulación). No se almacenaron tus datos ni tu currículum.', 'success');
      renderJobDetail(job.id);
    });
  });
}

function renderJobDetail(id) {
  const job = getJobById(id);
  const box = $('#job-detail');
  if (!job) {
    box.innerHTML = emptyState('alert', 'Oferta no encontrada',
      'Puede que la publicación se haya eliminado o que el enlace esté incorrecto.',
      `<a class="btn btn-primary btn-sm" href="#/empleos">Ver todas las ofertas</a>`);
    return;
  }
  box.innerHTML = jobDetailHtml(job);
  const btn = $('#apply-btn');
  if (btn) btn.addEventListener('click', () => openApplicationModal(job));
}
/* ============ 16) VISTA: ENCONTRAR PROFESIONALES ============ */
function prosCountActive() {
  return ['cat', 'zone', 'avail'].filter(k => prosState[k]).length;
}

function applyProFilters() {
  const q = prosState.q.trim().toLowerCase();
  let list = getAllPros().filter(p => {
    if (prosState.cat && p.trade !== prosState.cat) return false;
    if (prosState.zone && p.zone !== prosState.zone) return false;
    if (prosState.avail && p.availability !== prosState.avail) return false;
    if (q) {
      const hay = [p.name, p.trade, p.short, p.about, p.specialties.join(' '), p.services.join(' ')]
        .join(' ').toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
  if (prosState.sort === 'recent') {
    list.sort((a, b) => (a.createdAt ? 0 : 1) - (b.createdAt ? 0 : 1));
  } else {
    const rank = p => (p.featured ? 0 : 1) * 10 + (p.availability === AVAILABILITY[0] ? 0 : (p.availability === AVAILABILITY[1] ? 1 : 2));
    list.sort((a, b) => rank(a) - rank(b) || a.name.localeCompare(b.name, 'es'));
  }
  return list;
}

function renderProsList() {
  const list = applyProFilters();
  $('#pros-count').textContent = list.length === 0
    ? 'Sin resultados'
    : `${list.length} ${list.length === 1 ? 'profesional encontrado' : 'profesionales encontrados'}`;
  const box = $('#pros-list');
  if (!list.length) {
    box.innerHTML = emptyState('users', 'No encontramos profesionales con esos filtros',
      'Probá con otro oficio o ampliá la búsqueda. También podés limpiar los filtros y ver todo el directorio.',
      `<button class="btn btn-outline btn-sm" type="button" id="pros-empty-clear">${icon('reset', 16)}Limpiar filtros</button>`);
    $('#pros-empty-clear').addEventListener('click', resetProsFilters);
  } else {
    box.innerHTML = list.map(proCard).join('');
  }
  const chip = $('#pros-filter-count');
  const n = prosCountActive();
  chip.hidden = n === 0;
  chip.textContent = n;
}

function resetProsFilters() {
  Object.assign(prosState, { q: '', cat: '', zone: '', avail: '', sort: 'relevant' });
  $('#pros-search').value = '';
  $('#pros-cat').value = '';
  $('#pros-zone').value = '';
  $('#pros-avail').value = '';
  $('#pros-sort').value = 'relevant';
  renderProsList();
}

function setupProsView() {
  fillSelect($('#pros-cat'), PRO_CATEGORIES, 'Todos los oficios');
  fillSelect($('#pros-avail'), AVAILABILITY, 'Cualquiera');
  fillSelect($('#pros-sort'), ['relevant', 'recent'], undefined); /* custom labels */
  const sortSel = $('#pros-sort');
  sortSel.querySelector('option[value="relevant"]').textContent = 'Relevancia';
  sortSel.querySelector('option[value="recent"]').textContent = 'Publicaciones recientes';
  const zones = [...new Set(getAllPros().map(p => p.zone))];
  fillSelect($('#pros-zone'), zones, 'Toda la zona');
  sortSel.value = prosState.sort;

  $('#pros-search').addEventListener('input', debounce(e => {
    prosState.q = e.target.value;
    renderProsList();
  }, 200));
  $('#pros-cat').addEventListener('change', e => { prosState.cat = e.target.value; renderProsList(); });
  $('#pros-zone').addEventListener('change', e => { prosState.zone = e.target.value; renderProsList(); });
  $('#pros-avail').addEventListener('change', e => { prosState.avail = e.target.value; renderProsList(); });
  $('#pros-sort').addEventListener('change', e => { prosState.sort = e.target.value; renderProsList(); });
  $('#pros-clear').addEventListener('click', resetProsFilters);
  $('#pros-apply').addEventListener('click', () => {
    renderProsList();
    toggleFilterPanel('pros', false);
  });
}
/* ============ 17) VISTA: PERFIL DE PROFESIONAL ============ */
function proDetailHtml(pro) {
  const photos = photosOf(pro);
  const list = (arr, ic) => arr.map(x => `<li>${icon(ic, 16)}${esc(x)}</li>`).join('');
  const infoDl = (ic, label, value) => value
    ? `<div>${icon(ic, 16)}<div><dt>${label}</dt><dd>${esc(value)}</dd></div></div>` : '';

  return `<article class="detail-card">
    <div class="pro-detail-head">
      ${avatarHtml(pro, 'avatar-lg')}
      <div>
        <h1 class="detail-title">${esc(pro.name)}</h1>
        <p class="pro-trade">${icon(TRADE_ICONS[pro.trade] || 'wrench', 17)}${esc(pro.trade)}</p>
        <div class="pro-head-badges">
          ${badgeAvail(pro.availability)}
          <span class="badge badge-soft">${esc(pro.workMode)}</span>
        </div>
      </div>
    </div>

    <div class="chips-row">${pro.specialties.map(s => `<span class="chip">${esc(s)}</span>`).join('')}</div>

    <section class="detail-section">
      <h2>Sobre mí</h2>
      <p>${esc(pro.about)}</p>
    </section>

    <section class="detail-section">
      <h2>Servicios que ofrezco</h2>
      <ul class="services-list">${list(pro.services, 'check')}</ul>
    </section>

    ${pro.experience ? `<section class="detail-section">
      <h2>Experiencia</h2>
      <p class="experience-line">${icon('star', 16)}${esc(pro.experience)} en el oficio.</p>
    </section>` : ''}

    <dl class="info-grid">
      ${infoDl('map-pin', 'Zona de cobertura', pro.zone)}
      ${infoDl('briefcase', 'Modalidad de trabajo', pro.workMode)}
      ${infoDl('clock', 'Disponibilidad', pro.availability)}
      ${pro.email ? infoDl('mail', 'Correo de demostración', pro.email) : ''}
    </dl>
    <p class="demo-note">Perfil de demostración: el nombre, el teléfono y el correo son ficticios. Nunca se publican direcciones particulares.</p>
  </article>

  <div class="contact-bar">
    <span class="contact-phone">${icon('phone', 18)}${esc(pro.phone)}</span>
    <button class="btn btn-outline btn-sm" type="button" data-copy-phone="${esc(pro.phone)}">${icon('copy', 16)}Copiar teléfono</button>
    ${pro.whatsapp ? `<button class="btn btn-primary btn-sm" type="button" data-wa-demo="${esc(pro.id)}">${icon('message', 16)}Contactar por WhatsApp</button>` : ''}
    ${pro.email ? `<a class="btn btn-secondary btn-sm" href="mailto:${esc(pro.email)}">${icon('mail', 16)}Escribir un correo</a>` : ''}
    <span class="contact-demo-note">Datos de contacto ficticios para la demostración. En una versión real se muestran solo tras la validación municipal.</span>
  </div>

  <section class="detail-card">
    <h2 style="font-family:var(--font-display);font-size:1.05rem;margin-bottom:12px">Trabajos realizados</h2>
    ${photos.length
      ? `<div class="gallery">${photos.map((src, i) =>
          `<button class="gallery-item" type="button" data-lb="${i}" aria-label="Ampliar foto ${i + 1} de ${photos.length}">
             <img src="${src}" alt="Trabajo de ${esc(pro.name)}: ${esc(pro.trade)} (${i + 1})" loading="lazy">
           </button>`).join('')}</div>`
      : `<div class="empty-gallery">${icon('image', 22)}<span>Este profesional todavía no cargó fotos de sus trabajos.</span></div>`}
  </section>`;
}

function renderProDetail(id) {
  const pro = getProById(id);
  const box = $('#pro-detail');
  if (!pro) {
    box.innerHTML = emptyState('alert', 'Perfil no encontrado',
      'Puede que el perfil se haya eliminado o que el enlace esté incorrecto.',
      `<a class="btn btn-primary btn-sm" href="#/profesionales">Volver al directorio</a>`);
    return;
  }
  box.innerHTML = proDetailHtml(pro);
  const photos = photosOf(pro);
  $$('[data-lb]', box).forEach(btn =>
    btn.addEventListener('click', () => openLightbox(photos, Number(btn.dataset.lb), `Trabajo de ${pro.name}`)));
  const copyBtn = box.querySelector('[data-copy-phone]');
  if (copyBtn) copyBtn.addEventListener('click', () => copyText(copyBtn.dataset.copyPhone, 'Teléfono copiado (dato de demostración).'));
  const waBtn = box.querySelector('[data-wa-demo]');
  if (waBtn) waBtn.addEventListener('click', () => whatsappDemoNotice(pro));
}

function openContactModal(id) {
  const pro = getProById(id);
  if (!pro) return;
  Modal.open('Contactar a ' + pro.name, `
    <p class="muted" style="margin-bottom:16px">${esc(pro.trade)} · ${esc(pro.zone)}</p>
    <div class="contact-bar" style="box-shadow:none;margin-bottom:14px">
      <span class="contact-phone">${icon('phone', 18)}${esc(pro.phone)}</span>
      <button class="btn btn-outline btn-sm" type="button" data-copy-phone="${esc(pro.phone)}">Copiar teléfono</button>
    </div>
    <div class="form-actions" style="justify-content:flex-start">
      ${pro.whatsapp ? `<button class="btn btn-primary" type="button" data-wa-demo="${esc(pro.id)}">${icon('message', 16)}WhatsApp</button>` : ''}
      ${pro.email ? `<a class="btn btn-secondary" href="mailto:${esc(pro.email)}">${icon('mail', 16)}Correo</a>` : ''}
    </div>
    <p class="demo-note">Teléfono ficticio de demostración. En la versión real, el contacto se habilita después de la validación municipal del perfil.</p>`,
    (body) => {
      const copyBtn = body.querySelector('[data-copy-phone]');
      if (copyBtn) copyBtn.addEventListener('click', () => copyText(copyBtn.dataset.copyPhone, 'Teléfono copiado (dato de demostración).'));
      const waBtn = body.querySelector('[data-wa-demo]');
      if (waBtn) waBtn.addEventListener('click', () => whatsappDemoNotice(pro));
    });
}
/* ============ 18) FORMULARIO: OFRECER MIS SERVICIOS ============ */
const ProForm = {
  photos: [], /* dataURLs comprimidos, máx. 6 */

  setup() {
    fillSelect($('#pf-trade'), PRO_CATEGORIES, 'Elegí tu oficio…');
    fillSelect($('#pf-zone'), ZONES, 'Elegí tu zona…');
    fillSelect($('#pf-availability'), AVAILABILITY, 'Elegí…');
    $('#pf-workmode').innerHTML = WORK_MODES.map((m, i) => `
      <label class="check-item"><input type="checkbox" name="workmode" value="${esc(m)}" id="pf-wm-${i}">${esc(m)}</label>`).join('');
    $('#pro-photos').addEventListener('change', e => this.addFiles(e.target.files));
    $('#pro-preview-btn').addEventListener('click', () => this.preview());
    $('#pro-edit-back').addEventListener('click', () => this.backToEdit());
    $('#pro-publish').addEventListener('click', () => this.publish());
    $('#pro-form').addEventListener('submit', e => { e.preventDefault(); this.preview(); });
  },

  reset() {
    $('#pro-form').reset();
    this.photos = [];
    this.renderPhotos();
    $$('#pro-form .invalid').forEach(el => { el.classList.remove('invalid'); el.removeAttribute('aria-invalid'); });
    $$('#pro-form .field-error').forEach(el => { el.textContent = ''; el.classList.remove('visible'); });
    $('#pro-form-wrap').hidden = false;
    $('#pro-preview-wrap').hidden = true;
  },

  /* Fotos: validación de tipo/tamaño + compresión a máx. 640px (JPEG 0.72) */
  addFiles(fileList) {
    const files = Array.from(fileList || []);
    const allowed = ['image/jpeg', 'image/png', 'image/webp'];
    let pending = files.length;
    if (!pending) return;
    if (!files.length) return;
    files.forEach(file => {
      const done = () => { if (--pending === 0) this.renderPhotos(); };
      if (!allowed.includes(file.type)) {
        toast(`"${file.name}" no es una imagen válida (usá JPG, PNG o WebP).`, 'error');
        done(); return;
      }
      if (file.size > 3 * 1024 * 1024) {
        toast(`"${file.name}" supera el máximo de 3 MB.`, 'error');
        done(); return;
      }
      if (this.photos.length >= 6) {
        toast('Ya elegiste el máximo de 6 fotos.', 'error');
        done(); return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const finish = (dataUrl) => {
          if (this.photos.length < 6) this.photos.push(dataUrl);
          done();
        };
        try {
          const img = new Image();
          img.onload = () => {
            try {
              const MAX = 640;
              const scale = Math.min(1, MAX / Math.max(img.width, img.height));
              const canvas = document.createElement('canvas');
              canvas.width = Math.round(img.width * scale);
              canvas.height = Math.round(img.height * scale);
              canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
              finish(canvas.toDataURL('image/jpeg', 0.72));
            } catch { finish(String(reader.result)); }
          };
          img.onerror = () => finish(String(reader.result));
          img.src = String(reader.result);
        } catch { done(); }
      };
      reader.onerror = () => { toast(`No se pudo leer "${file.name}".`, 'error'); done(); };
      reader.readAsDataURL(file);
    });
    $('#pro-photos').value = '';
  },

  renderPhotos() {
    const box = $('#photo-previews');
    box.innerHTML = this.photos.map((src, i) => `
      <div class="photo-item">
        <img src="${src}" alt="Vista previa de la foto ${i + 1}">
        <button class="photo-remove" type="button" data-remove-photo="${i}" aria-label="Quitar la foto ${i + 1}">${icon('x', 14)}</button>
      </div>`).join('');
    $$('[data-remove-photo]', box).forEach(btn =>
      btn.addEventListener('click', () => {
        this.photos.splice(Number(btn.dataset.removePhoto), 1);
        this.renderPhotos();
      }));
  },

  collect() {
    return {
      name: $('#pf-name').value.trim(),
      phone: $('#pf-phone').value.trim(),
      email: $('#pf-email').value.trim(),
      businessName: $('#pf-business').value.trim(),
      trade: $('#pf-trade').value,
      zone: $('#pf-zone').value,
      availability: $('#pf-availability').value,
      specialties: $('#pf-specialties').value.split(',').map(s => s.trim()).filter(Boolean),
      description: $('#pf-description').value.trim(),
      experience: $('#pf-experience').value.trim(),
      workMode: $$('input[name="workmode"]:checked').map(c => c.value),
      photos: this.photos.slice()
    };
  },

  validate(d) {
    const checks = [
      [$('#pf-name'), [{ required: true, min: 3, msg: 'Ingresá tu nombre y apellido.' }]],
      [$('#pf-phone'), [{ required: true, phone: true }]],
      [$('#pf-email'), [{ email: true }]],
      [$('#pf-trade'), [{ required: true, msg: 'Elegí tu oficio principal.' }]],
      [$('#pf-zone'), [{ required: true, msg: 'Elegí la zona donde trabajás.' }]],
      [$('#pf-availability'), [{ required: true, msg: 'Elegí tu disponibilidad.' }]],
      [$('#pf-specialties'), [{ required: true, min: 3, msg: 'Ingresá al menos una especialidad.' }]],
      [$('#pf-description'), [{ required: true, min: 20, msg: 'Contá brevemente tus servicios (mínimo 20 caracteres).' }]]
    ];
    let ok = checks.every(([input, c]) => validateField(input, c));
    const wmErr = $('#pf-workmode-err');
    if (!d.workMode.length) {
      wmErr.textContent = 'Marcá al menos una modalidad de trabajo.';
      wmErr.classList.add('visible');
      ok = false;
    } else {
      wmErr.textContent = '';
      wmErr.classList.remove('visible');
    }
    if (!ok) {
      const first = $('#pro-form').querySelector('.invalid');
      if (first) first.focus();
      toast('Revisá los campos marcados antes de continuar.', 'error');
    }
    return ok;
  },

  preview() {
    const d = this.collect();
    if (!this.validate(d)) return;
    const card = proCard({
      id: editingProId || 'preview',
      name: d.name,
      trade: d.trade,
      specialties: d.specialties,
      short: d.description,
      about: d.description,
      services: d.specialties,
      experience: d.experience,
      zone: d.zone,
      availability: d.availability,
      workMode: d.workMode[0] || 'Según el servicio',
      photos: d.photos
    });
    $('#pro-preview').innerHTML = card;
    $('#pro-preview').querySelectorAll('[data-contact]').forEach(b => b.remove());
    $('#pro-form-wrap').hidden = true;
    $('#pro-preview-wrap').hidden = false;
    scrollToTop();
  },

  backToEdit() {
    $('#pro-preview-wrap').hidden = true;
    $('#pro-form-wrap').hidden = false;
    $('#pf-name').focus();
  },

  publish() {
    const d = this.collect();
    if (!this.validate(d)) return;
    const pro = {
      id: editingProId || uid('up'),
      name: d.name,
      trade: d.trade,
      specialties: d.specialties,
      short: d.description,
      about: d.description,
      services: d.specialties,
      experience: d.experience,
      zone: d.zone,
      availability: d.availability,
      workMode: d.workMode.join(' / '),
      workModeList: d.workMode,
      phone: d.phone,
      email: d.email,
      businessName: d.businessName,
      whatsapp: true,
      featured: false,
      photos: d.photos,
      createdAt: editingProId ? (this.currentCreatedAt || Date.now()) : Date.now()
    };
    if (d.photos.length) sessionPhotos[pro.id] = d.photos.slice();
    const result = Store.savePro(pro);
    if (result === 'error') {
      toast('No se pudo guardar la publicación en este navegador. Probá liberar espacio.', 'error');
      return;
    }
    if (result === 'noPhotos') {
      toast('Guardado, pero sin fotos: el almacenamiento del navegador está lleno. Las fotos se verán solo durante esta sesión.', 'info');
    }
    const wasEditing = !!editingProId;
    editingProId = null;
    this.reset();
    toast(wasEditing ? 'Perfil actualizado (demostración).' : '¡Tu perfil se publicó en el directorio! (demostración)', 'success');
    location.hash = '#/profesionales/' + pro.id;
  },

  prefill(pro) {
    this.reset();
    editingProId = pro.id;
    this.currentCreatedAt = pro.createdAt || Date.now();
    $('#pf-name').value = pro.name || '';
    $('#pf-phone').value = pro.phone || '';
    $('#pf-email').value = pro.email || '';
    $('#pf-business').value = pro.businessName || '';
    $('#pf-trade').value = pro.trade || '';
    $('#pf-zone').value = pro.zone || '';
    $('#pf-availability').value = pro.availability || '';
    $('#pf-specialties').value = (pro.specialties || []).join(', ');
    $('#pf-description').value = pro.about || pro.short || '';
    $('#pf-experience').value = pro.experience || '';
    const modes = pro.workModeList || (pro.workMode ? pro.workMode.split(' / ') : []);
    $$('input[name="workmode"]').forEach(c => { c.checked = modes.includes(c.value); });
    this.photos = photosOf(pro).slice();
    this.renderPhotos();
    $('#ofrecer-sub').textContent = 'Estás editando tu perfil publicado en el directorio.';
    $('#pro-submit').innerHTML = icon('check', 16) + 'Guardar cambios';
    $('#pro-publish').innerHTML = icon('check', 16) + 'Guardar cambios';
  }
};
/* ============ 19) FORMULARIO: PUBLICAR BÚSQUEDA ============ */
const JobForm = {
  collect() {
    return {
      company: $('#jf-company').value.trim(),
      contactPerson: $('#jf-contact').value.trim(),
      email: $('#jf-email').value.trim(),
      phone: $('#jf-phone').value.trim(),
      title: $('#jf-title').value.trim(),
      category: $('#jf-cat').value,
      contract: $('#jf-contract').value,
      schedule: $('#jf-schedule').value,
      zone: $('#jf-zone').value,
      salary: $('#jf-salary').value.trim(),
      experience: $('#jf-exp').value.trim(),
      deadline: $('#jf-deadline').value,
      description: $('#jf-description').value.trim(),
      responsibilities: $('#jf-resp').value.split('\n').map(s => s.trim()).filter(Boolean),
      requirements: $('#jf-req').value.split('\n').map(s => s.trim()).filter(Boolean),
      contactMethod: $('#jf-cmethod').value
    };
  },

  validate(d) {
    const checks = [
      [$('#jf-company'), [{ required: true, min: 2, msg: 'Ingresá el nombre del empleador.' }]],
      [$('#jf-contact'), [{ required: true, min: 3, msg: 'Ingresá la persona de contacto.' }]],
      [$('#jf-email'), [{ required: true, email: true }]],
      [$('#jf-phone'), [{ required: true, phone: true }]],
      [$('#jf-title'), [{ required: true, min: 5, msg: 'Ingresá un título de puesto claro.' }]],
      [$('#jf-cat'), [{ required: true, msg: 'Elegí una categoría laboral.' }]],
      [$('#jf-contract'), [{ required: true, msg: 'Elegí el tipo de contratación.' }]],
      [$('#jf-schedule'), [{ required: true, msg: 'Elegí la jornada.' }]],
      [$('#jf-zone'), [{ required: true, msg: 'Elegí la ubicación.' }]],
      [$('#jf-deadline'), [{ dateFuture: true }]],
      [$('#jf-description'), [{ required: true, min: 30, msg: 'Describí el puesto (mínimo 30 caracteres).' }]],
      [$('#jf-cmethod'), [{ required: true, msg: 'Elegí el método de contacto preferido.' }]]
    ];
    let ok = checks.every(([input, c]) => validateField(input, c));
    if (!d.responsibilities.length) { setFieldErrorText('jf-resp', 'Agregá al menos una responsabilidad (una por línea).'); ok = false; }
    else setFieldErrorText('jf-resp', '');
    if (!d.requirements.length) { setFieldErrorText('jf-req', 'Agregá al menos un requisito (uno por línea).'); ok = false; }
    else setFieldErrorText('jf-req', '');
    if (!ok) {
      const first = $('#job-form').querySelector('.invalid');
      if (first) first.focus();
      toast('Revisá los campos marcados antes de continuar.', 'error');
    }
    return ok;
  },

  preview() {
    const d = this.collect();
    if (!this.validate(d)) return;
    $('#job-preview').innerHTML = jobCard({
      id: editingJobId || 'preview',
      title: d.title, company: d.company, category: d.category,
      contract: d.contract, schedule: d.schedule, zone: d.zone,
      short: d.description, requirements: d.requirements,
      days: 0, createdAt: this.currentCreatedAt || Date.now()
    });
    $('#job-form-wrap').hidden = true;
    $('#job-preview-wrap').hidden = false;
    scrollToTop();
  },

  backToEdit() {
    $('#job-preview-wrap').hidden = true;
    $('#job-form-wrap').hidden = false;
    $('#jf-title').focus();
  },

  publish() {
    const d = this.collect();
    if (!this.validate(d)) return;
    const job = {
      id: editingJobId || uid('uj'),
      title: d.title,
      company: d.company,
      category: d.category,
      contract: d.contract,
      schedule: d.schedule,
      zone: d.zone,
      salary: d.salary,
      experience: d.experience,
      deadline: d.deadline ? new Date(d.deadline + 'T12:00:00').toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric' }) : '',
      contactMethod: d.contactMethod,
      contact: { person: d.contactPerson, email: d.email, phone: d.phone },
      short: d.description,
      description: d.description,
      responsibilities: d.responsibilities,
      requirements: d.requirements,
      createdAt: editingJobId ? (this.currentCreatedAt || Date.now()) : Date.now()
    };
    if (Store.saveJob(job) === 'error') {
      toast('No se pudo guardar la oferta en este navegador.', 'error');
      return;
    }
    const wasEditing = !!editingJobId;
    editingJobId = null;
    this.resetForm();
    toast(wasEditing ? 'Oferta actualizada (demostración).' : '¡Tu búsqueda se publicó! Ya aparece en «Buscar empleo». (demostración)', 'success');
    location.hash = '#/empleos/' + job.id;
  },

  resetForm() {
    $('#job-form').reset();
    $$('#job-form .invalid').forEach(el => { el.classList.remove('invalid'); el.removeAttribute('aria-invalid'); });
    $$('#job-form .field-error').forEach(el => { el.textContent = ''; el.classList.remove('visible'); });
    $('#job-form-wrap').hidden = false;
    $('#job-preview-wrap').hidden = true;
    $('#publicar-sub').textContent = 'Para empleadores, comercios, emprendimientos y particulares de la región.';
    $('#job-submit').textContent = 'Publicar búsqueda';
    $('#job-publish').textContent = 'Publicar búsqueda';
  },

  setup() {
    fillSelect($('#jf-cat'), JOB_CATEGORIES, 'Elegí una categoría…');
    fillSelect($('#jf-contract'), CONTRACT_TYPES, 'Elegí…');
    fillSelect($('#jf-schedule'), SCHEDULES, 'Elegí…');
    fillSelect($('#jf-zone'), ZONES, 'Elegí…');
    fillSelect($('#jf-cmethod'), CONTACT_METHODS, 'Elegí…');
    $('#job-preview-btn').addEventListener('click', () => this.preview());
    $('#job-edit-back').addEventListener('click', () => this.backToEdit());
    $('#job-publish').addEventListener('click', () => this.publish());
    $('#job-form').addEventListener('submit', e => { e.preventDefault(); this.preview(); });
  },

  prefill(job) {
    this.resetForm();
    editingJobId = job.id;
    this.currentCreatedAt = job.createdAt || Date.now();
    $('#jf-company').value = job.company || '';
    $('#jf-contact').value = (job.contact && job.contact.person) || '';
    $('#jf-email').value = (job.contact && job.contact.email) || '';
    $('#jf-phone').value = (job.contact && job.contact.phone) || '';
    $('#jf-title').value = job.title || '';
    $('#jf-cat').value = job.category || '';
    $('#jf-contract').value = job.contract || '';
    $('#jf-schedule').value = job.schedule || '';
    $('#jf-zone').value = job.zone || '';
    $('#jf-salary').value = job.salary || '';
    $('#jf-exp').value = job.experience || '';
    $('#jf-description').value = job.description || '';
    $('#jf-resp').value = (job.responsibilities || []).join('\n');
    $('#jf-req').value = (job.requirements || []).join('\n');
    $('#jf-cmethod').value = job.contactMethod || '';
    $('#publicar-sub').textContent = 'Estás editando tu oferta publicada.';
    $('#job-submit').textContent = 'Guardar cambios';
    $('#job-publish').textContent = 'Guardar cambios';
  }
};

function setFieldErrorText(fieldId, msg) {
  const err = document.getElementById(fieldId + '-err');
  const input = document.getElementById(fieldId);
  if (err) { err.textContent = msg; err.classList.toggle('visible', !!msg); }
  if (input) input.classList.toggle('invalid', !!msg);
}
/* ============ 20) VISTA: MI PERFIL / MIS PUBLICACIONES ============ */
function myProCard(pro) {
  return `<article class="card pro-card">
    <div class="pro-head">
      ${avatarHtml(pro)}
      <div class="pro-head-info">
        <h3>${esc(pro.name)}</h3>
        <p class="pro-trade">${icon(TRADE_ICONS[pro.trade] || 'wrench', 15)}${esc(pro.trade)}</p>
      </div>
      <div class="pub-card-actions">
        <a class="icon-btn" href="#/profesionales/${esc(pro.id)}" aria-label="Ver perfil público de ${esc(pro.name)}">${icon('search', 17)}</a>
        <a class="icon-btn" href="#/ofrecer-servicios/${esc(pro.id)}" aria-label="Editar perfil de ${esc(pro.name)}">${icon('edit', 17)}</a>
        <button class="icon-btn" type="button" data-del-pro="${esc(pro.id)}" data-del-name="${esc(pro.name)}" aria-label="Eliminar perfil de ${esc(pro.name)}">${icon('trash', 17)}</button>
      </div>
    </div>
    <p class="pro-specs"><strong>Especialidades:</strong> ${esc(pro.specialties.join(' · '))}</p>
    <p class="pro-zone">${icon('map-pin', 14)}${esc(pro.zone)} · Publicado el ${esc(fmtDate(pro.createdAt || Date.now()))}</p>
  </article>`;
}

function myJobCard(job) {
  return `<article class="card job-card">
    <div class="job-card-top">
      <span class="badge badge-soft">${esc(job.category)}</span>
      <span class="job-date">Publicada el ${esc(fmtDate(job.createdAt || Date.now()))}</span>
    </div>
    <h3>${esc(job.title)}</h3>
    <p class="job-company">${icon('briefcase', 15)}${esc(job.company)}</p>
    <div class="job-meta">
      <span>${icon('map-pin', 14)}${esc(job.zone)}</span>
      <span>${icon('clock', 14)}${esc(job.contract)} · ${esc(job.schedule)}</span>
    </div>
    <div class="card-actions">
      <a class="btn btn-outline btn-sm" href="#/empleos/${esc(job.id)}">Ver oferta</a>
      <a class="btn btn-ghost btn-sm" href="#/publicar/${esc(job.id)}">${icon('edit', 15)}Editar</a>
      <button class="btn btn-danger btn-sm" type="button" data-del-job="${esc(job.id)}" data-del-name="${esc(job.title)}">${icon('trash', 15)}Eliminar</button>
    </div>
  </article>`;
}

function renderMine() {
  const pros = Store.getPros();
  const jobs = Store.getJobs();
  const apps = Store.getApps();
  $('#count-pros').textContent = pros.length;
  $('#count-jobs').textContent = jobs.length;
  $('#count-apps').textContent = apps.length;

  const prosBox = $('#my-pros-list');
  prosBox.innerHTML = pros.length ? pros.map(myProCard).join('') :
    emptyState('user-plus', 'Todavía no publicaste tu perfil de servicios',
      'Si ofrecés un oficio o servicio, creá tu perfil para que los vecinos te encuentren.',
      `<a class="btn btn-primary btn-sm" href="#/ofrecer-servicios">${icon('plus', 16)}Publicar mi perfil</a>`);

  const jobsBox = $('#my-jobs-list');
  jobsBox.innerHTML = jobs.length ? jobs.map(myJobCard).join('') :
    emptyState('briefcase', 'No publicaste ninguna búsqueda laboral',
      '¿Necesitás personal para tu comercio o emprendimiento? Cargá tu primera oferta en minutos.',
      `<a class="btn btn-primary btn-sm" href="#/publicar">${icon('plus', 16)}Publicar una búsqueda</a>`);

  const appsBox = $('#my-apps-list');
  appsBox.innerHTML = apps.length ? apps.map(a => `
    <div class="card app-row">
      <div class="app-row-info">
        <h3>${esc(a.jobTitle)}</h3>
        <p class="app-row-meta">Postulación del ${esc(fmtDate(a.date))} · Solo se registra la postulación: nunca se guardan datos personales ni el currículum.</p>
      </div>
      <span class="badge badge-warn">Postulación ${esc(a.status || 'Simulada')}</span>
      <div class="app-row-actions">
        <button class="btn btn-ghost btn-sm" type="button" data-del-app="${esc(a.id)}">${icon('trash', 15)}Eliminar registro</button>
      </div>
    </div>`).join('') :
    emptyState('file', 'No te postulaste a ninguna oferta todavía',
      'Explorá las ofertas publicadas por comercios y empresas de la zona.',
      `<a class="btn btn-primary btn-sm" href="#/empleos">${icon('search', 16)}Buscar empleo</a>`);

  $$('[data-del-pro]', prosBox).forEach(btn => btn.addEventListener('click', () => {
    confirmDialog('Eliminar perfil', `¿Seguro que querés eliminar el perfil de "${btn.dataset.delName}"? Esta acción no se puede deshacer.`, 'Eliminar', () => {
      Store.deletePro(btn.dataset.delPro);
      delete sessionPhotos[btn.dataset.delPro];
      toast('Perfil eliminado (demostración).', 'success');
      renderMine();
    });
  }));
  $$('[data-del-job]', jobsBox).forEach(btn => btn.addEventListener('click', () => {
    confirmDialog('Eliminar oferta', `¿Seguro que querés eliminar la oferta "${btn.dataset.delName}"?`, 'Eliminar', () => {
      Store.deleteJob(btn.dataset.delJob);
      toast('Oferta eliminada (demostración).', 'success');
      renderMine();
    });
  }));
  $$('[data-del-app]', appsBox).forEach(btn => btn.addEventListener('click', () => {
    confirmDialog('Eliminar registro', '¿Querés eliminar el registro de esta postulación simulada?', 'Eliminar', () => {
      Store.removeApp(btn.dataset.delApp);
      toast('Registro eliminado.', 'success');
      renderMine();
    });
  }));
}
function setupMineTabs() {
  const tabs = [[$('#tab-pros'), $('#panel-pros')], [$('#tab-jobs'), $('#panel-jobs')], [$('#tab-apps'), $('#panel-apps')]];
  tabs.forEach(([tab, panel], i) => {
    tab.addEventListener('click', () => {
      tabs.forEach(([t, p], j) => {
        const active = i === j;
        t.classList.toggle('active', active);
        t.setAttribute('aria-selected', String(active));
        t.tabIndex = active ? 0 : -1;
        p.hidden = !active;
      });
      tab.focus();
    });
    tab.addEventListener('keydown', e => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      const dir = e.key === 'ArrowRight' ? 1 : -1;
      const next = tabs[(i + dir + tabs.length) % tabs.length][0];
      next.click();
    });
  });
}

/* Preparación de formularios según ruta (creación o edición) */
function prepareOfferForm(id) {
  ProForm.reset();
  editingProId = null;
  $('#ofrecer-sub').textContent = 'Creá tu perfil profesional para que los vecinos te encuentren por tu trabajo, no por tu apariencia.';
  $('#pro-submit').textContent = 'Publicar perfil';
  $('#pro-publish').textContent = 'Publicar perfil';
  if (id) {
    const pro = Store.getPros().find(p => p.id === id);
    if (pro) ProForm.prefill(pro);
  }
}

function preparePublishForm(id) {
  JobForm.resetForm();
  editingJobId = null;
  if (id) {
    const job = Store.getJobs().find(j => j.id === id);
    if (job) JobForm.prefill(job);
  }
}
/* ============ 21) ROUTER ============ */
const VIEW_IDS = ['home', 'empleos', 'empleo', 'profesionales', 'profesional', 'ofrecer', 'publicar', 'mis'];
const TITLES = {
  home: 'Empleo Local · Las Toscas, Santa Fe',
  empleos: 'Buscar empleo · Empleo Local',
  empleo: 'Oferta laboral · Empleo Local',
  profesionales: 'Encontrar profesionales · Empleo Local',
  profesional: 'Perfil profesional · Empleo Local',
  ofrecer: 'Ofrecer mis servicios · Empleo Local',
  publicar: 'Publicar una búsqueda · Empleo Local',
  'mis-publicaciones': 'Mi perfil · Empleo Local'
};

function showView(name, navKey) {
  VIEW_IDS.forEach(id => {
    const el = document.getElementById('view-' + id);
    if (el) el.hidden = (id !== name);
  });
  const key = navKey || name;
  $$('[data-nav]').forEach(a => {
    const isActive = a.dataset.nav === key;
    a.classList.toggle('active', isActive);
    if (a.classList.contains('bn-item')) {
      if (isActive) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    }
  });
  document.title = TITLES[key] || TITLES.home;
  scrollToTop();
}

function route() {
  const seg = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  const [p0, p1] = seg;

  if (Modal.isOpen()) Modal.close();
  if (Drawer.isOpen()) { $('#drawer').hidden = true; $('#drawer-backdrop').hidden = true; $('#menu-btn').setAttribute('aria-expanded', 'false'); }

  if (!p0) {
    Views.home();
    showView('home', 'home');
  } else if (p0 === 'empleos') {
    if (p1) { renderJobDetail(p1); showView('empleo', 'empleos'); }
    else { renderJobsList(); showView('empleos', 'empleos'); }
  } else if (p0 === 'profesionales') {
    if (p1) { renderProDetail(p1); showView('profesional', 'profesionales'); }
    else { renderProsList(); showView('profesionales', 'profesionales'); }
  } else if (p0 === 'ofrecer-servicios') {
    prepareOfferForm(p1);
    showView('ofrecer', 'ofrecer-servicios');
  } else if (p0 === 'publicar') {
    preparePublishForm(p1);
    showView('publicar', 'publicar');
  } else if (p0 === 'mis-publicaciones') {
    renderMine();
    showView('mis', 'mis-publicaciones');
  } else {
    Views.home();
    showView('home', 'home');
  }
}
/* ============ 22) EVENTOS GLOBALES E INICIALIZACIÓN ============ */
function injectStaticIcons() {
  $$('[data-icon]').forEach(el => {
    el.innerHTML = icon(el.dataset.icon, Number(el.dataset.size) || 18);
  });
}

function trapFocus(container, e) {
  const focusables = $$('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])', container)
    .filter(el => el.offsetParent !== null || container.classList.contains('lightbox'));
  if (!focusables.length) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

function bindGlobalEvents() {
  /* Menú lateral */
  $('#menu-btn').addEventListener('click', () => Drawer.open());
  $('#drawer-close').addEventListener('click', () => Drawer.close());
  $('#drawer-backdrop').addEventListener('click', () => Drawer.close());
  $$('#drawer a[href^="#/"]').forEach(a => a.addEventListener('click', () => {
    $('#drawer').hidden = true;
    $('#drawer-backdrop').hidden = true;
    $('#menu-btn').setAttribute('aria-expanded', 'false');
  }));

  /* Modal */
  $('#modal-close').addEventListener('click', () => Modal.close());
  $('#modal-backdrop').addEventListener('mousedown', e => { if (e.target === $('#modal-backdrop')) Modal.close(); });

  /* Lightbox */
  $('#lb-close').addEventListener('click', closeLightbox);
  $('#lb-prev').addEventListener('click', () => lightboxMove(-1));
  $('#lb-next').addEventListener('click', () => lightboxMove(1));
  $('#lightbox').addEventListener('mousedown', e => { if (e.target === $('#lightbox')) closeLightbox(); });

  /* Delegación: botón Contactar en tarjetas del directorio */
  document.addEventListener('click', e => {
    const contactBtn = e.target.closest('[data-contact]');
    if (contactBtn) openContactModal(contactBtn.dataset.contact);
  });

  /* Teclado: Escape y foco atrapado */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (Modal.isOpen()) Modal.close();
      else if (!$('#lightbox').hidden) closeLightbox();
      else if (Drawer.isOpen()) Drawer.close();
      return;
    }
    if (e.key === 'Tab') {
      if (Modal.isOpen()) trapFocus($('#modal-backdrop'), e);
      else if (!$('#lightbox').hidden) trapFocus($('#lightbox'), e);
      else if (Drawer.isOpen()) trapFocus($('#drawer'), e);
    }
    if (!$('#lightbox').hidden) {
      if (e.key === 'ArrowLeft') lightboxMove(-1);
      if (e.key === 'ArrowRight') lightboxMove(1);
    }
  });

  /* Botones "volver" de las vistas de detalle */
  $('#job-back').addEventListener('click', () => { location.hash = '#/empleos'; });
  $('#pro-back').addEventListener('click', () => { location.hash = '#/profesionales'; });

  /* Paneles de filtros (mobile) */
  $('#jobs-filter-toggle').addEventListener('click', () => toggleFilterPanel('jobs'));
  $('#pros-filter-toggle').addEventListener('click', () => toggleFilterPanel('pros'));

  window.addEventListener('hashchange', route);
}

function init() {
  injectStaticIcons();
  setupJobsView();
  setupProsView();
  ProForm.setup();
  JobForm.setup();
  setupMineTabs();
  bindGlobalEvents();
  renderJobsList();
  renderProsList();
  Views.home();
  route();

  /* Enlaces internos para pruebas automáticas del prototipo (sin efecto visible) */
  window.__EL = { Store, Views, ProForm, JobForm, route, jobsState, prosState, getAllJobs, getAllPros, getProById, getJobById };
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();



























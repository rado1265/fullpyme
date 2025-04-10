import { version } from './config';

export const homeRoutes = {
  name: 'Inicio',
  to: '/',
  exact: true,
  icon: 'chart-pie',
  children: [
    { to: '/', name: 'Panel Principal', exact: true },
    { to: '/dashboard-alt', name: 'Panel Secundario' },
    { to: '/feed', name: 'Tablero', exact: true, badge: { text: 'new' } },
    { to: '/landing', name: 'Landing' }
  ]
};

export const authenticationRoutes = {
  name: 'Autenticación',
  to: '/authentication',
  icon: 'lock',
  children: [
    {
      to: '/authentication/basic',
      name: 'Basico',
      children: [
        { to: '/authentication/basic/login', name: 'Iniciar Sesión' },
        { to: '/authentication/basic/logout', name: 'Cerrar Sesión' },
        { to: '/authentication/basic/register', name: 'Registrar' },
        { to: '/authentication/basic/forget-password', name: 'Clave perdida' },
        { to: '/authentication/basic/password-reset', name: 'Recuperar clave' },
        { to: '/authentication/basic/confirm-mail', name: 'Confirmar mail' },
        { to: '/authentication/basic/lock-screen', name: 'Pantalla de espera' }
      ]
    },
    {
      to: '/authentication/card',
      name: 'Tarjeta',
      children: [
        { to: '/authentication/card/login', name: 'Iniciar Sesión' },
        { to: '/authentication/card/logout', name: 'Cerrar Sesión' },
        { to: '/authentication/card/register', name: 'Registrar' },
        { to: '/authentication/card/forget-password', name: 'Clave perdida' },
        { to: '/authentication/card/password-reset', name: 'Recuperar clave' },
        { to: '/authentication/card/confirm-mail', name: 'Confirmar mail' },
        { to: '/authentication/card/lock-screen', name: 'Pantalla de espera' }
      ]
    },
    {
      to: '/authentication/split',
      name: 'Divisor',
      children: [
        { to: '/authentication/split/login', name: 'Iniciar Sesión' },
        { to: '/authentication/split/logout', name: 'Cerrar Sesión' },
        { to: '/authentication/split/register', name: 'Registrar' },
        { to: '/authentication/split/forget-password', name: 'Clave perdida' },
        { to: '/authentication/split/password-reset', name: 'Recuperar clave' },
        { to: '/authentication/split/confirm-mail', name: 'Confirmar mail' },
        { to: '/authentication/split/lock-screen', name: 'Pantalla de espera' }
      ]
    }
  ]
};

export const ECommerceRoutes = {
  name: 'Tienda Virtual',
  to: '/e-commerce',
  icon: 'cart-plus',
  children: [
    { to: '/e-commerce/products/list', name: 'Lista de productos' },
    { to: '/e-commerce/products/grid', name: 'Tabla de producto' },
    { to: '/e-commerce/product-details', name: 'Detalle producto' },
    { to: '/e-commerce/orders', name: 'Ordenes' },
    { to: '/e-commerce/order-details', name: 'Detalle ordenes' },
    { to: '/e-commerce/customers', name: 'Clientes' },
    { to: '/e-commerce/shopping-cart', name: 'Carrito de compra' },
    { to: '/e-commerce/checkout', name: 'Pago' },
    { to: '/e-commerce/favourite-items', name: 'Productos favoritos' }
  ]
};

export const pageRoutes = {
  name: 'Paginas',
  to: '/pages',
  icon: 'copy',
  children: [
    { to: '/pages/activity', name: 'Actividad' },
    { to: '/pages/associations', name: 'Partners' },
    { to: '/pages/billing', name: 'Cartera' },
    { to: '/pages/customer-details', name: 'Detalle cliente' },
    { to: '/pages/event-detail', name: 'Detalle evento' },
    { to: '/pages/event-create', name: 'Crear evento' },
    { to: '/pages/events', name: 'Eventos' },
    { to: '/pages/faq', name: 'Preguntas' },
    { to: '/pages/invoice', name: 'Boleta' },
    { to: '/pages/invite-people', name: 'Referidos' },
    { to: '/pages/notifications', name: 'Notificaciones' },
    { to: '/pages/people', name: 'Personas' },
    { to: '/pages/pricing', name: 'Planes' },
    { to: '/pages/pricing-alt', name: 'Planes V2' },
    { to: '/pages/profile', name: 'Perfil' },
    { to: '/pages/settings', name: 'Configuración' },
    //{ to: '/pages/starter', name: 'Iniciar' },
    {
      to: '/errors',
      name: 'Errores',
      children: [{ to: '/errors/404', name: '404' }, { to: '/errors/500', name: '500' }]
    }
  ]
};

export const emailRoutes = {
  name: 'Email',
  to: '/email',
  icon: 'envelope-open',
  children: [
    { to: '/email/inbox', name: 'Bandeja entrada' },
    { to: '/email/email-detail', name: 'Detalle email' },
    { to: '/email/compose', name: 'Crear email' }
  ]
};

export const documentationRoutes = {
  name: 'Documentación',
  to: '/documentation',
  exact: true,
  icon: 'book'
};

export const changelogRoutes = {
  name: 'Cambios',
  to: '/changelog',
  exact: true,
  icon: 'code-branch',
  badge: {
    text: `v${version}`,
    color: 'soft-primary'
  }
};

export const componentRoutes = {
  name: 'Componentes',
  to: '/components',
  icon: 'puzzle-piece',
  children: [
    { to: '/components/alerts', name: 'Alertas' },
    { to: '/components/accordions', name: 'Acordeon' },
    { to: '/components/avatar', name: 'Avatar' },
    { to: '/components/badges', name: 'Etiquetas' },
    { to: '/components/backgrounds', name: 'Fondos' },
    { to: '/components/breadcrumb', name: 'Breadcrumb' },
    { to: '/components/buttons', name: 'Botones' },
    { to: '/components/cards', name: 'Tarjetas' },
    { to: '/components/collapses', name: 'Colapsables' },
    { to: '/components/dropdowns', name: 'Dropdowns' },
    { to: '/components/forms', name: 'Formulario' },
    { to: '/components/listgroups', name: 'Listas' },
    { to: '/components/modals', name: 'Ventana emergente' },
    { to: '/components/navs', name: 'Textos menú' },
    { to: '/components/navbars', name: 'Menú' },
    { to: '/components/pageheaders', name: 'Page headers' },
    { to: '/components/paginations', name: 'Paginación' },
    { to: '/components/popovers', name: 'Popovers' },
    { to: '/components/progress', name: 'Progreso' },
    { to: '/components/tables', name: 'Tablas' },
    { to: '/components/tooltips', name: 'Tooltips' }
  ]
};

export const pluginRoutes = {
  name: 'Plugins',
  to: '/plugins',
  icon: 'plug',
  children: [
    { to: '/plugins/bulk-select', name: 'Selección' },
    { to: '/plugins/chart', name: 'Graficos' },
    { to: '/plugins/countup', name: 'Conteo' },
    { to: '/plugins/datetime', name: 'Datetime' },
    { to: '/plugins/echarts', name: 'Mapa' },
    { to: '/plugins/fontawesome', name: 'Iconos' },
    { to: '/plugins/google-map', name: 'Google map' },
    { to: '/plugins/image-lightbox', name: 'Imagenes' },
    { to: '/plugins/progressbar', name: 'Progreso' },
    { to: '/plugins/select', name: 'Select' },
    { to: '/plugins/toastify', name: 'Alertas' },
    { to: '/plugins/typed', name: 'Tipeo' },
    { to: '/plugins/wysiwyg', name: 'Editor de texto' }
  ]
};

export const utilityRoutes = {
  name: 'Utilidades',
  to: '/utilities',
  icon: ['fab', 'hotjar'],
  children: [
    { to: '/utilities/borders', name: 'Bordes' },
    { to: '/utilities/clearfix', name: 'Flotantes' },
    { to: '/utilities/closeIcon', name: 'Icono cerrar' },
    { to: '/utilities/colors', name: 'Colores' },
    { to: '/utilities/display', name: 'Largos' },
    { to: '/utilities/embed', name: 'Incrustados' },
    { to: '/utilities/figures', name: 'Figuras' },
    { to: '/utilities/flex', name: 'Flex' },
    { to: '/utilities/grid', name: 'Grid' },
    { to: '/utilities/sizing', name: 'Tamaños' },
    { to: '/utilities/spacing', name: 'Espacios' },
    { to: '/utilities/stretchedLink', name: 'Tarjetas clickeables' },
    { to: '/utilities/typography', name: 'Fuentes' },
    { to: '/utilities/verticalAlign', name: 'Alineación' },
    { to: '/utilities/visibility', name: 'Visibilidad' }
  ]
};

export default [
  homeRoutes,
  pageRoutes,
  emailRoutes,
  authenticationRoutes,
  ECommerceRoutes,
  componentRoutes,
  utilityRoutes,
  pluginRoutes,
  documentationRoutes,
  changelogRoutes
];

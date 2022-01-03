const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pagos/realizar-pago',
        permanent: true,
      },
      {
        source: '/pagos',
        destination: '/pagos/realizar-pago',
        permanent: true,
      },
      {
        source: '/residentes',
        destination: '/residentes/ver-residentes',
        permanent: true,
      },
      {
        source: '/reservaciones',
        destination: '/reservaciones/ver-reservaciones',
        permanent: true,
      },
      {
        source: '/egresos',
        destination: '/egresos/ver-egresos',
        permanent: true,
      },
      {
        source: '/otros',
        destination: '/otros/sugerencias-y-reportes',
        permanent: true,
      },
    ]
  },
}

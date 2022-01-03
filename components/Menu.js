import Link from 'next/link'
import React from 'react'
import { Accordion } from 'react-bootstrap'

const Menu = () => {
	return (
		<Accordion defaultActiveKey="0" flush>
			<Accordion.Item eventKey="0">
				<Accordion.Header>Pagos</Accordion.Header>
				<Accordion.Body>
					<ul className="nav flex-column">
						<li className="nav-item">
							<Link href="/pagos/realizar-pago"><a className="nav-link">Realizar Pago</a></Link>
						</li>
						<li className="nav-item">
							<Link href="/pagos/modificar-pago"><a className="nav-link">Modificar pago</a></Link>
						</li>
						<li className="nav-item">
							<Link href="/pagos/cancelar-pago"><a className="nav-link">Cancelar pago</a></Link>
						</li>
					</ul>
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="1">
				<Accordion.Header>Residentes</Accordion.Header>
				<Accordion.Body>
					<ul className="nav flex-column">
						<li className="nav-item">
							<Link href="/residentes/ver-residentes"><a className="nav-link">Ver residentes</a></Link>
						</li>
						<li className="nav-item">
							<Link href="/residentes/agregar-residente"><a className="nav-link">Agregar residente</a></Link>
						</li>
						<li className="nav-item">
							<Link href="/residentes/modificar-residente"><a className="nav-link">Modificar residente</a></Link>
						</li>
						<li className="nav-item">
							<Link href="/residentes/eliminar-residente"><a className="nav-link">Eliminar residente</a></Link>
						</li>
					</ul>
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="2">
				<Accordion.Header>Reservaciones</Accordion.Header>
				<Accordion.Body>
					<ul className="nav flex-column">
						<li className="nav-item">
							<Link href="/reservaciones/ver-reservaciones"><a className="nav-link">Ver reservaciones</a></Link>
						</li>
						<li className="nav-item">
							<Link href="/reservaciones/agregar-reservacion"><a className="nav-link">Agregar reservación</a></Link>
						</li>
						<li className="nav-item">
							<Link href="/reservaciones/modificar-reservacion"><a className="nav-link">Modificar reservación</a></Link>
						</li>
						<li className="nav-item">
							<Link href="/reservaciones/cancelar-reservacion"><a className="nav-link">Cancelar reservación</a></Link>
						</li>
					</ul>
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="3">
				<Accordion.Header>Egresos</Accordion.Header>
				<Accordion.Body>
					<ul className="nav flex-column">
						<li className="nav-item">
							<Link href="/egresos/ver-balance-general"><a className="nav-link">Ver balance general</a></Link>
						</li>
						<li className="nav-item">
							<Link href="/egresos/ver-egresos"><a className="nav-link">Ver egresos</a></Link>
						</li>
						<li className="nav-item">
							<Link href="/egresos/agregar-egreso"><a className="nav-link">Agregar egreso</a></Link>
						</li>
						<li className="nav-item">
							<Link href="/egresos/modificar-egreso"><a className="nav-link">Modificar egreso</a></Link>
						</li>
						<li className="nav-item">
							<Link href="/egresos/cancelar-egreso"><a className="nav-link">Cancelar egreso</a></Link>
						</li>
					</ul>
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="4">
				<Accordion.Header>Otros</Accordion.Header>
				<Accordion.Body>
					<ul className="nav flex-column">
						<li className="nav-item">
							<Link href="/otros/sugerencias-y-reportes"><a className="nav-link">Sugerencias y reportes</a></Link>
						</li>
						<li className="nav-item">
							<Link href="/otros/avisos"><a className="nav-link">Avisos</a></Link>
						</li>
						<li className="nav-item">
							<Link href="/otros/notificaciones"><a className="nav-link">Notificaciones</a></Link>
						</li>
					</ul>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	)
}

export default Menu

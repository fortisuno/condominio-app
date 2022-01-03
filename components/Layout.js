import React from 'react'
import Menu from './Menu'

const Layout = ({children}) => {
	return (
		<div className='container-fluid vh-100'>

			<div className="row h-100 align-items-strech">
				<div className="col-2 bg-light border-end p-0">
					<div className='vstack h-100'>
						<div className="px-3 py-4">
							<h4>Condominio-app</h4>
						</div>
						<Menu />
						<div className='mt-auto mb-5 px-3'>
							<button className='btn btn-danger w-100'>Cerrar sesión</button>
						</div>
					</div>
				</div>
				<div className="col p-5">
					<div className="container">
						{children}
					</div>
				</div>	
			</div>

			<div className='position-absolute end-0 bottom-0 p-3'>
				<span className="badge bg-dark">v0.1</span>
			</div>
		</div>
	)
}

export default Layout

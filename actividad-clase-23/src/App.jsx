import React from 'react'
import SubscriptorCard from './Components/SubscriptorCard'
import './styles.css'

function App() {
  

  return (
	<div>
		<SubscriptorCard
		  details={
			{
				id: 123
			}
		  }
		  nombre='Fernando'
		  descripcion='Usuario nuevo'
		  fecha='11-09-2024'
		  rol='premium'
		/>
		<SubscriptorCard
		  details={
			{
				id: 124
			}
		  }
		  nombre='Renzo'
		  descripcion='Usuario administrador'
		  fecha='12-08-2024'
		  rol='admin'
		/>
		<SubscriptorCard
		  details={
			{
				id: 125
			}
		  }
		  nombre='Julian'
		  descripcion='Usuario nuevo'
		  fecha='13-07-2024'
		  rol='admin'
		/>
	</div>
  )
}

export default App

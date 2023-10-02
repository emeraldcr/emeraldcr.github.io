
import Reserva from '../../pages/reservas/reserva'
import Panel from '../../pages/type/panel'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Reserva></Reserva>
      <Panel></Panel>
    </main>
  )
}

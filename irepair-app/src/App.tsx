import { useState } from "react"
import { Header } from "./components/Header"
import { NewServiceForm } from "./components/NewServiceForm"
import { ServiceCard } from "./components/ServiceCard"

export type Service = {
  id: string
  client: string
  device: string
  problem: string
  status: "aberto" | "finalizado"
}

export default function App() {

  const [services, setServices] = useState<Service[]>([])

  function addService(service: Service) {
    setServices((prev) => [...prev, service])
  }

  function finishService(id: string) {
    setServices((prev) =>
      prev.map((service) =>
        service.id === id
          ? { ...service, status: "finalizado" }
          : service
      )
    )
  }

  return (
    <div>
      <Header />
      <NewServiceForm addService={addService} />
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            client={service.client}
            device={service.device}
            problem={service.problem}
            status={service.status}
            finishService={finishService}
          />
        ))}
      </div>
    </div>
  )
}

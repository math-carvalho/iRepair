import { useState } from "react"
import type { Service } from "../App"

type Props = {
  addService: (service: Service) => void
}

export function NewServiceForm({ addService }: Props) {
  const [client, setClient] = useState("")
  const [device, setDevice] = useState("")
  const [problem, setProblem] = useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    addService({
      id: crypto.randomUUID(),
      client,
      device,
      problem,
      status: "aberto"
    })
    setClient("")
    setDevice("")
    setProblem("")
  }

  return (
    <div className="flex justify-center p-14">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-8">
          <input
            className="bg-gray-300 p-4 rounded"
            type="text"
            placeholder="Nome do cliente:"
            value={client}
            onChange={(e) => setClient(e.target.value)}
          />
          <input
            className="bg-gray-300 p-4 rounded"
            type="text"
            placeholder="Modelo do aparelho:"
            value={device}
            onChange={(e) => setDevice(e.target.value)}
          />
          <input
            className="bg-gray-300 p-4 rounded"
            type="text"
            placeholder="Defeito:"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
          />
        </div>

        <div className="flex flex-col pt-8">
          <button
            className="bg-gray-800 text-white rounded-full p-3 hover:bg-gray-700"
            type="submit"
          >
            Adicionar
          </button>
        </div>
      </form>
    </div>
  )
}
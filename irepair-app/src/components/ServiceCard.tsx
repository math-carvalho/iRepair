type Props = {
  id: string
  client: string
  device: string
  problem: string
  status: "aberto" | "finalizado"
  finishService: (id: string) => void
}

export function ServiceCard({
  id,
  client,
  device,
  problem,
  status,
  finishService
    }: Props) {

    const statusColor =
        status === "aberto"
        ? "bg-green-500"
        : "bg-gray-500"

  return (
    <div className="w-80">
      <ul className="bg-gray-700 p-6 rounded-lg">
        <li className="bg-gray-300 p-2 m-2 rounded-md">
          Cliente: {client}
        </li>
        <li className="bg-gray-300 p-2 m-2 rounded-md">
          Aparelho: {device}
        </li>
        <li className="bg-gray-300 p-2 m-2 rounded-md">
          Defeito: {problem}
        </li>
        <li className={`p-2 m-2 rounded-md text-white ${statusColor}`}>
          Status: {status}
        </li>

        {status === "aberto" && (
          <button
            className="bg-blue-500 text-white p-2 m-2 rounded hover:bg-blue-600"
            onClick={() => finishService(id)}
          >
            Finalizar
          </button>
        )}
      </ul>
    </div>
  )
}
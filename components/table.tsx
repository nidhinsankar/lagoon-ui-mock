// Import select from shadcn-ui
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function TableUI() {
  const data = [
    {
      name: "Albert Flores",
      timestamp: "23 August, 12:03PM",
      score: "✓",
      status: "Shortlisted",
      resume: "Resume.pdf",
      response: "Lorem ipsum dolor sit amet...",
    },
    {
      name: "Wade Warren",
      timestamp: "23 August, 12:05PM",
      score: "✓",
      status: "Shortlisted",
      resume: "Resume.pdf",
      response: "Lorem ipsum dolor sit amet...",
    },
    {
      name: "Albert Flores",
      timestamp: "23 August, 12:03PM",
      score: "✓",
      status: "Shortlisted",
      resume: "Resume.pdf",
      response: "Lorem ipsum dolor sit amet...",
    },
    {
      name: "Wade Warren",
      timestamp: "23 August, 12:05PM",
      score: "✓",
      status: "Shortlisted",
      resume: "Resume.pdf",
      response: "Lorem ipsum dolor sit amet...",
    },
    {
      name: "Albert Flores",
      timestamp: "23 August, 12:03PM",
      score: "✓",
      status: "Shortlisted",
      resume: "Resume.pdf",
      response: "Lorem ipsum dolor sit amet...",
    },
    {
      name: "Wade Warren",
      timestamp: "23 August, 12:05PM",
      score: "✓",
      status: "Shortlisted",
      resume: "Resume.pdf",
      response: "Lorem ipsum dolor sit amet...",
    },
    {
      name: "Albert Flores",
      timestamp: "23 August, 12:03PM",
      score: "✓",
      status: "Shortlisted",
      resume: "Resume.pdf",
      response: "Lorem ipsum dolor sit amet...",
    },
    {
      name: "Wade Warren",
      timestamp: "23 August, 12:05PM",
      score: "✓",
      status: "Shortlisted",
      resume: "Resume.pdf",
      response: "Lorem ipsum dolor sit amet...",
    },
    {
      name: "Albert Flores",
      timestamp: "23 August, 12:03PM",
      score: "✓",
      status: "Shortlisted",
      resume: "Resume.pdf",
      response: "Lorem ipsum dolor sit amet...",
    },
    {
      name: "Wade Warren",
      timestamp: "23 August, 12:05PM",
      score: "✓",
      status: "Shortlisted",
      resume: "Resume.pdf",
      response: "Lorem ipsum dolor sit amet...",
    },
    {
      name: "Albert Flores",
      timestamp: "23 August, 12:03PM",
      score: "✓",
      status: "Shortlisted",
      resume: "Resume.pdf",
      response: "Lorem ipsum dolor sit amet...",
    },
    {
      name: "Wade Warren",
      timestamp: "23 August, 12:05PM",
      score: "✓",
      status: "Shortlisted",
      resume: "Resume.pdf",
      response: "Lorem ipsum dolor sit amet...",
    },
    {
      name: "Albert Flores",
      timestamp: "23 August, 12:03PM",
      score: "✓",
      status: "Shortlisted",
      resume: "Resume.pdf",
      response: "Lorem ipsum dolor sit amet...",
    },
    {
      name: "Wade Warren",
      timestamp: "23 August, 12:05PM",
      score: "✓",
      status: "Shortlisted",
      resume: "Resume.pdf",
      response: "Lorem ipsum dolor sit amet...",
    },
    {
      name: "Albert Flores",
      timestamp: "23 August, 12:03PM",
      score: "✓",
      status: "Shortlisted",
      resume: "Resume.pdf",
      response: "Lorem ipsum dolor sit amet...",
    },
    {
      name: "Wade Warren",
      timestamp: "23 August, 12:05PM",
      score: "✓",
      status: "Shortlisted",
      resume: "Resume.pdf",
      response: "Lorem ipsum dolor sit amet...",
    },
    {
      name: "Albert Flores",
      timestamp: "23 August, 12:03PM",
      score: "✓",
      status: "Shortlisted",
      resume: "Resume.pdf",
      response: "Lorem ipsum dolor sit amet...",
    },
    {
      name: "Wade Warren",
      timestamp: "23 August, 12:05PM",
      score: "✓",
      status: "Shortlisted",
      resume: "Resume.pdf",
      response: "Lorem ipsum dolor sit amet...",
    },
    {
      name: "Albert Flores",
      timestamp: "23 August, 12:03PM",
      score: "✓",
      status: "Shortlisted",
      resume: "Resume.pdf",
      response: "Lorem ipsum dolor sit amet...",
    },
    {
      name: "Wade Warren",
      timestamp: "23 August, 12:05PM",
      score: "✓",
      status: "Shortlisted",
      resume: "Resume.pdf",
      response: "Lorem ipsum dolor sit amet...",
    },
    {
      name: "Albert Flores",
      timestamp: "23 August, 12:03PM",
      score: "✓",
      status: "Shortlisted",
      resume: "Resume.pdf",
      response: "Lorem ipsum dolor sit amet...",
    },
    {
      name: "Wade Warren",
      timestamp: "23 August, 12:05PM",
      score: "✓",
      status: "Shortlisted",
      resume: "Resume.pdf",
      response: "Lorem ipsum dolor sit amet...",
    },
    {
      name: "Albert Flores",
      timestamp: "23 August, 12:03PM",
      score: "✓",
      status: "Shortlisted",
      resume: "Resume.pdf",
      response: "Lorem ipsum dolor sit amet...",
    },
    {
      name: "Wade Warren",
      timestamp: "23 August, 12:05PM",
      score: "✓",
      status: "Shortlisted",
      resume: "Resume.pdf",
      response: "Lorem ipsum dolor sit amet...",
    },
    {
      name: "Albert Flores",
      timestamp: "23 August, 12:03PM",
      score: "✓",
      status: "Shortlisted",
      resume: "Resume.pdf",
      response: "Lorem ipsum dolor sit amet...",
    },
    {
      name: "Wade Warren",
      timestamp: "23 August, 12:05PM",
      score: "✓",
      status: "Shortlisted",
      resume: "Resume.pdf",
      response: "Lorem ipsum dolor sit amet...",
    },
    // Add more dummy data here...
  ];

  return (
    <div className="px-4 py-6 w-[calc(100vw-100px)]">
      {/* Filter Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="shortlisted">Shortlisted</SelectItem>
              <SelectItem value="waitlisted">Waitlisted</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3+ years">3+ Years</SelectItem>
              <SelectItem value="5+ years">5+ Years</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md">
          Export
        </button>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full border rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Timestamp</th>
              <th className="py-2 px-4">Score</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Resume</th>
              <th className="py-2 px-4">View Response</th>
              <th className="py-2 px-4">Timestamp</th>
              <th className="py-2 px-4">Score</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Resume</th>
              <th className="py-2 px-4">View Response</th>
              <th className="py-2 px-4">Timestamp</th>
              <th className="py-2 px-4">Score</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Resume</th>
              <th className="py-2 px-4">View Response</th>
              <th className="py-2 px-4">Timestamp</th>
              <th className="py-2 px-4">Score</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Resume</th>
              <th className="py-2 px-4">View Response</th>
            </tr>
          </thead>
          <tbody>
            {data.map((candidate, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="py-2 px-4">{candidate.name}</td>
                <td className="py-2 px-4">{candidate.timestamp}</td>
                <td className="py-2 px-4">{candidate.score}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-1 text-sm font-medium rounded-md ${
                      candidate.status === "Shortlisted"
                        ? "bg-green-100 text-green-600"
                        : candidate.status === "Rejected"
                        ? "bg-red-100 text-red-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {candidate.status}
                  </span>
                </td>
                <td className="py-2 px-4">
                  <button className="text-blue-600 underline">
                    {candidate.resume}
                  </button>
                </td>
                <td className="py-2 px-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    View
                  </button>
                </td>
                <td className="py-2 px-4">{candidate.timestamp}</td>
                <td className="py-2 px-4">{candidate.score}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-1 text-sm font-medium rounded-md ${
                      candidate.status === "Shortlisted"
                        ? "bg-green-100 text-green-600"
                        : candidate.status === "Rejected"
                        ? "bg-red-100 text-red-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {candidate.status}
                  </span>
                </td>
                <td className="py-2 px-4">
                  <button className="text-blue-600 underline">
                    {candidate.resume}
                  </button>
                </td>
                <td className="py-2 px-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    View
                  </button>
                </td>
                <td className="py-2 px-4">{candidate.timestamp}</td>
                <td className="py-2 px-4">{candidate.score}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-1 text-sm font-medium rounded-md ${
                      candidate.status === "Shortlisted"
                        ? "bg-green-100 text-green-600"
                        : candidate.status === "Rejected"
                        ? "bg-red-100 text-red-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {candidate.status}
                  </span>
                </td>
                <td className="py-2 px-4">
                  <button className="text-blue-600 underline">
                    {candidate.resume}
                  </button>
                </td>
                <td className="py-2 px-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    View
                  </button>
                </td>
                <td className="py-2 px-4">{candidate.timestamp}</td>
                <td className="py-2 px-4">{candidate.score}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-1 text-sm font-medium rounded-md ${
                      candidate.status === "Shortlisted"
                        ? "bg-green-100 text-green-600"
                        : candidate.status === "Rejected"
                        ? "bg-red-100 text-red-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {candidate.status}
                  </span>
                </td>
                <td className="py-2 px-4">
                  <button className="text-blue-600 underline">
                    {candidate.resume}
                  </button>
                </td>
                <td className="py-2 px-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

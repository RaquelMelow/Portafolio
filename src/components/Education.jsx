import { EDUCATION } from "../constants"

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-10 py-6 gap-6 m-10">
      <h2 className="text-5xl font-bold text-center my-12 bg-gradient-to-r from-purple-400 via-indigo-500 to-pink-400 text-transparent bg-clip-text">
        Education & Experience
      </h2>
      <div className="space-y-8">
        {EDUCATION.map((item, index) => (
          <div key={index} className="bg-blue-100 p-6 rounded-lg shadow-lg py-4 m-10">
            <h3 className="text-2xl font-bold">{item.degree}</h3>
            <p className="text-lg font-bold text-neutral-600">{item.institution}</p>
            <p className="text-sm text-neutral-500 italic">{item.year}</p>
            <p className="text-sm text-neutral-500 italic">{item.role}</p>
            <p className="mt-4">{item.description}</p>
            <ul className="mt-2 list-disc list-inside">
              {item.technologies.map((technologies, i) => (
                <li key={i} className="text-neutral-500">{technologies}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education;


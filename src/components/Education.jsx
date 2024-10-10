import { EDUCATION } from "../constants"

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36 py-6">
      <h2 className="my-20 text-center text-4xl">Education</h2>
      <div className="space-y-8">
        {EDUCATION.map((item, index) => (
          <div key={index} className="bg-neutral-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">{item.degree}</h3>
            <p className="text-lg text-neutral-400">{item.institution}</p>
            <p className="text-sm text-neutral-500 italic">{item.year}</p>
            <p className="mt-4">{item.description}</p>
            <ul className="mt-2 list-disc list-inside">
              {item.skills.map((skill, i) => (
                <li key={i} className="text-neutral-300">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education;


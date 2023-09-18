
export default function ExpirenceCard({experience, index}){

    return <div className={index % 2 === 0 ? "fadeleftin worksecsubs" : "faderightin worksecsubs"}>
        {/* <p className={index % 2 === 0 ? "fadeleftin" : "faderightin"}></p> */}
        <h4>{experience.title}</h4>
        <p>{experience.company}</p>
        <p className="discrip marg">
            {Array.isArray(experience.description) ? (
                experience.description.map((dis, index) => (
                <p className="marg" key={index}>{dis}</p>
                ))
            ) : (
                <p className="marg">{experience.description}</p>
            )}
        </p>

    </div>
}
import { useState } from "react";

function Skills() {
    const [visible, setVisible] = useState(true);

    return (
        <section style={{ position: "relative" }}>
            {}
            <div style={{ textAlign: "center", marginBottom: "10px" }}>
                <button onClick={() => setVisible(!visible)}>
                    {visible ? "Hide Skills" : "Show Skills"}
                </button>
            </div>

            {visible && (
                <section className="card">
                    <h2>Skills</h2>
                    <section className="card" id="skillsSection">
                        <div className="skills-content">
                            <h3>Web Development</h3>
                            <ul>
                                <li>
                                    Frontend
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                    </ul>
                                </li>
                                <li>Backend (Basic)</li>
                            </ul>
                        </div>
                    </section>
                </section>
            )}
        </section>
    );
}

export default Skills;
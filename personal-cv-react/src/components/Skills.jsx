import { useState } from "react";
import Card from "./Card";

function Skills({ skills }) {
    const [visible, setVisible] = useState(true);

    return (
        <section style={{ position: "relative" }}>
            <div style={{ textAlign: "center", marginBottom: "10px" }}>
                <button onClick={() => setVisible(!visible)}>
                    {visible ? "Hide Skills" : "Show Skills"}
                </button>
            </div>

            {visible && (
                <Card title="Skills">
                    <div className="skills-content">
                        <h3>General Skills</h3>
                        <ul>
                            {skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>

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
                </Card>
            )}
        </section>
    );
}

export default Skills;
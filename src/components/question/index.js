import React, { useEffect, useState } from 'react';
import { 
    QuestionControl, 
    QuestionStyled, 
    Container, 
    LeftSection, 
    RightSection, 
    ProgressContainer,
    CircleContainer,
    ProgressBorder,
    CircleQuarter,
    ActiveBorder,
    Circle,
    QuestionBox,
    QuestionText,
    Input,
    Button,
    ErrorText
} from "./styles"

import { createQuestion } from 'utils/api/question'
import { useSession, useUsers } from '../../hooks'

import Router from 'next/router'

const Question = ({}) => {
    const { loggedUser } = useSession()
    const { current, detail } = useUsers()
    const modules = [
        [
          "¿Qué problema u oportunidad has identificado? Específica la industria y la relevancía del problema con estadistica",
          "¿Cuáles son las consecuencias críticas si el problema sigue sin ser resuelto por tus clientes?",
          "¿Qué tipo de soluciones han probado tus clientes anteriormente y por qué no les han funcionado?",
          "¿Por qué este problema sigue siendo relevante para tus clientes a pesar de las soluciones que existen en el mercado?"
        ],
        [
          "¿Qué experiencia previa tienes tú o tu equipo para comprender en profundidad el problema que están resolviendo?",
          "¿Cuál es la experiencia de cada fundador y cómo es relevante para el startup? Describe a los 3 principales socios",
          "¿Algún miembro del equipo ha sufrido este problema de manera directa o cercana?",
          "¿Por qué son el equipo ideal para sacar adelante este proyecto? ¿Cuál es su experiencia trabajando juntos?"
        ],
        [
          "¿Quiénes son tu público objetivo? Describelos específicamente",
          "¿Cómo separas los diferentes tipos de cliente hasta llegar a quienes se benefician más de tu solución?",
          "¿Qué características específicas tiene tu cliente ideal que lo hace necesitar más tu solución?",
          "¿Cómo llegarás a más clientes? Indica planes a corto plazo y medio plazo ¿Mecado local, nacional o internacional?"
        ],
        [
          "¿Cuáles son las principales tendencias en las que se apoya tu solución para el mercado actual?",
          "¿Cuáles son tus principales competidores y en qué crees que tu producto los supera? Nombre los que resuelven el mismo problema",
          "¿Cuál es tu ventaja competitiva y de qué manera se diferencia sustancialmente de la competencia a nivel nacional y/o internacional?",
          "¿Cómo planeas convertirte en un negocio global? ¿Cómo planeas superar las barreras y/o limitaciones?"
        ],
        [
          "¿Cuál es el beneficio principal cuando se utiliza tu solución?",
          "¿Cuál es tu modelo de negocio? Describe la estrategia para generar ingresos con tu solución",
          "¿En qué medida tu propuesta es más rápida, más eficiente o más accesible que las otras alternativas?",
          "¿Tiene contenido tecnológico? Detalla el funcionamiento (y menciona si van a gestionar propiedad intelectual solo si aplica)"
        ]
    ];

    const moduleTitles = [
        "Evaluación del Problema",
        "Evaluación del Equipo",
        "Evaluación del Cliente",
        "Evaluación del Entorno",
        "Evaluación de la Propuesta de Valor"
    ];

    const moduleDescriptions = [
        "Analiza la relevancia, urgencia y claridad del problema que la startup busca resolver, así como su impacto en el mercado objetivo.",
        "Examina la experiencia, habilidades, compromiso y complementariedad del equipo fundador y su capacidad para ejecutar la visión.",
        "Evalúa la comprensión del público objetivo, su comportamiento, necesidades reales y la validación del interés por la solución.",
        "Considera factores externos como competencia, tendencias del mercado, barreras de entrada y el marco legal o regulatorio.",
        "Revisa qué tan clara, diferenciadora y atractiva es la solución ofrecida frente a otras alternativas en el mercado."
    ];

    const totalModules = modules.length;
    const questionsPerModule = 4;

    const [currentModule, setCurrentModule] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [answers, setAnswers] = useState(Array(totalModules).fill([]));
    const [error, setError] = useState("");

    const handleNextQuestion = async () => {
        if (!inputValue.trim()) {
            setError("Este campo es obligatorio para continuar.");
            return;
        }

        const newAnswers = [...answers];
        const newEntry = {
            pregunta: modules[currentModule][currentQuestion],
            respuesta: inputValue.trim(),
            modulo: moduleTitles[currentModule],
            numero: currentModule + 1
        };

        newAnswers[currentModule] = [...newAnswers[currentModule], newEntry];
        setAnswers(newAnswers);
        setInputValue("");
        setError("");

        const isLastModule = currentModule === totalModules - 1;
        const isLastQuestion = currentQuestion === questionsPerModule - 1;

        if (isLastModule && isLastQuestion) {
            const resultadoFinal = newAnswers.map((pregs, index) => ({
                modulo: moduleTitles[index],
                numero: index + 1,
                preguntas: pregs
            }));
            // console.log("Respuestas finales:", resultadoFinal);
            const resp = await createQuestion({
                user: loggedUser && loggedUser._id,
                questions: resultadoFinal
            })

            if(resp.success) {
                Router.push('/evaluaciones')
            }
            return;
        }

        if (currentQuestion < questionsPerModule - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setCurrentModule(currentModule + 1);
            setCurrentQuestion(0);
        }
    };

    useEffect(() => {
        if(loggedUser && loggedUser._id) {
            detail(loggedUser && loggedUser._id)
        }
    }, [loggedUser && loggedUser._id])

    useEffect(() => {
        if(current && current._id) {
            console.log('current question', current)
            if (current.rol === 'externo') {
                Router.push('/resultados')
            }
            if(current.question) {
                Router.push('/evaluaciones')
            }
        }
    }, [current && current._id])

    return (
        <>
            {
                current && !current.question && current.rol === 'emprendedor' && (
                <QuestionStyled>
                    <QuestionControl>
                        <Container>
                            <LeftSection>
                                <h2>MÓDULO {currentModule + 1}</h2>
                                <h2>{moduleTitles[currentModule]}</h2>
                                <h3>{moduleDescriptions[currentModule]}</h3>
                            </LeftSection>

                            <ProgressContainer>
                                {modules.map((_, index) => {
                                    const isActive = index === currentModule;
                                    const isCompleted = answers[index].length === questionsPerModule;

                                    return (
                                    <CircleContainer key={index}>
                                        <ProgressBorder>
                                        {[...Array(4)].map((_, i) => (
                                            <CircleQuarter
                                            key={i}
                                            angle={i * 90}
                                            filled={i < answers[index].length}
                                            />
                                        ))}
                                        </ProgressBorder>
                                        {isActive && <ActiveBorder />}
                                        <Circle active={isActive} completed={isCompleted}>
                                        {Math.min(answers[index].length + (isActive ? 1 : 0), questionsPerModule)}/{questionsPerModule}
                                        </Circle>
                                    </CircleContainer>
                                    );
                                })}
                            </ProgressContainer>

                            <RightSection>
                                <QuestionBox>
                                <QuestionText>
                                    Pregunta {currentQuestion + 1}/{questionsPerModule}:<br />
                                    {modules[currentModule][currentQuestion]}
                                </QuestionText>
                                {error && <ErrorText>{error}</ErrorText>}
                                <Input
                                    type="text"
                                    placeholder="Tu respuesta..."
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                />
                                <Button onClick={handleNextQuestion}>Siguiente</Button>
                                </QuestionBox>
                            </RightSection>
                            </Container>
                    </QuestionControl>
                </QuestionStyled>
                )
            }
        </>
    )
}

export default Question
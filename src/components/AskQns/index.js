import './index.css'
import { IoIosAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";

const questionsList = [
    {id: 1, question: "Do you offer freelancers?"},
    {id: 2, question: "What’s the guarantee that I will be satisfied with the hired talent?"},
    {id: 3, question: "Can I hire multiple talents at once?", answer: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."},
    {id: 4, question: "Why should I not go to an agency directly?"},
    {id: 5, question: "Who can help me pick a right skillset and duration for me?"}
]
const AskQnsComp = () => (
    <div className='ask-container'>
        <div className='section-1'>
            <div className='wrapper-div'>
                <p className='para'>What’s on your mind</p>
                <h2 className='ask-heading'>Ask Questions</h2>
            </div>
            <img className='unicorn-img' src='https://res.cloudinary.com/dnwwyvtjx/image/upload/v1715055200/ai8xuaheza0b5zr8y32h.png' alt='unicorn-imgs' />
        </div>
        <div className='qns-section'>
            <ul className='qns-list'>
                {questionsList.map(each => 
                    <li className={`list-item ${each.id === 5 ? 'last-item' : null}`} key={each.id}>
                        <div className='question-div'>
                            <p className='question'>{each.question}</p>
                            {each.answer ? <RiSubtractFill className='pluse-icon' /> : <IoIosAdd className='pluse-icon' />}
                        </div>
                        {each.answer ? <p className='answer'>{each.answer}</p> : null}
                    </li>)
                }
            </ul>
        </div>
    </div>
)

export default AskQnsComp
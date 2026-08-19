
import FilterBlock from '../FilterBlock/FilterBlock';
import Questions from '../Questions/Questions';
import './QuestionSection.css';


const QuestionSection = () => {

  return (
    <main className='main'>
        <div className="container main__container">
            <Questions/>
            <FilterBlock/>
        </div>
    </main>
  )
}

export default QuestionSection
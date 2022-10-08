const Story = ({text}) => {
    return (
      <header>
          <h1 className= "story">{text}</h1>
      </header>
    )
  }
  
  Story.defaultProps = {
      text: "Once upon a time, there existed a populous but poor village called HushedVille. In order to sustain the village with the limited resources they had, the Village Chief came up with this idea of playing hangmen, a survival game. There would be 7 new words to guess everyday. The first 7 families to guess the words would get the resources, whereas those who did not get at least 1 right word would be… murdered. You have been teleported to this village for one day. Try to guess what the 7 words are, or risk being outed. Your clues can be found within the title, subtitle or storyline. Let the games begin and may the odds be in your favour!"
  }
    
  export default Story;
function About() {
  return (
    <div className="mt-24 mx-auto flex flex-col w-[42.5rem] h-[27.5rem] border-2 border-[#304D63] bg-white rounded">
      <div className="text-center text-5xl py-5">
        <h1>What is Pomodoro?</h1>
      </div>
      <p className="text-center text-xl mx-2 mt-3 font-semibold">
      The Pomodoro Technique was developed in the late 1980s by then university student Francesco Cirillo. Cirillo was struggling to focus on his studies and complete assignments. Feeling overwhelmed, he asked himself to commit to just 10 minutes of focused study time. Encouraged by the challenge, he found a tomato (pomodoro in Italian) shaped kitchen timer, and the Pomodoro technique was born.
      </p>
      <p className="text-center text-xl mx-2 mt-3 font-semibold">
      The arbitrary silliness of using a tomato as a stand-in for units of time belies the Pomodoro Technique's serious effectiveness when it comes to helping people get things done.
      </p>
    </div>
  );
}

export default About;

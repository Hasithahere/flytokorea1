const koreanWords = [
    { word: "안녕하세요", pronunciation: "annyeonghaseyo" },
    { word: "사과", pronunciation: "sagwa" },
    { word: "감사합니다", pronunciation: "kamsahamnida" },
    { word: "선생님", pronunciation: "seonsaengnim" },
    { word: "반", pronunciation: "ban" },
    { word: "친구", pronunciation: "chingu" },
    { word: "학생", pronunciation: "haksaeng" },
    { word: "칠판", pronunciation: "chilpan" },
    { word: "연필", pronunciation: "yeonpil" },
    { word: "지우개", pronunciation: "jiugae" },
    { word: "볼펜", pronunciation: "bolpen" },
    { word: "필통", pronunciation: "piltong" },
    { word: "책상", pronunciation: "chaeksang" },
    { word: "책", pronunciation: "chaek" },
    { word: "의자", pronunciation: "uija" },
    { word: "공책", pronunciation: "gongchaek" },
    { word: "시계", pronunciation: "siggae" },
    { word: "창문", pronunciation: "changmun" },
    { word: "달력", pronunciation: "dallyeok" },
    { word: "문", pronunciation: "mun" },
    { word: "책을 펴세요", pronunciation: "chaeg-eul pyeoseyo" },
    { word: "책을 덮으세요", pronunciation: "chaeg-eul deobeuseyo" },
    { word: "보세요", pronunciation: "boseyo" },
    { word: "들으세요", pronunciation: "deuleuseyo" }
  ];
  
  let currentIndex = 0;
  
  const wordDisplay = document.getElementById('word');
  const nextWordBtn = document.getElementById('nextWordBtn');
  const pronounceBtn = document.getElementById('pronounceBtn');
  const synth = window.speechSynthesis;
  
  function displayWord() {
    wordDisplay.textContent = koreanWords[currentIndex].word;
  }
  
  function pronounceWord() {
    const utterance = new SpeechSynthesisUtterance(koreanWords[currentIndex].word);
    utterance.lang = 'ko-KR'; // Set language to Korean (Korea)
    synth.speak(utterance);
  }
  
  function getNextWord() {
    currentIndex = (currentIndex + 1) % koreanWords.length;
    displayWord();
  }
  
  nextWordBtn.addEventListener('click', getNextWord);
  pronounceBtn.addEventListener('click', pronounceWord);
  
  // Initial display
  displayWord();
  
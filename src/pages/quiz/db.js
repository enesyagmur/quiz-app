const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
  // dizi elemanlarını karıştırmaya yarayan fonksiyoon
};

export const fetchQuizData = async () => {
  const url = `https://opentdb.com/api.php?amount=10&type=multiple`;
  const data = await (await fetch(url)).json();
  return data.results.map((dt) => ({
    ...dt,
    answers: shuffleArray([...dt.incorrect_answers, dt.correct_answer]),
    // kodun anlamı, "...dt" datayı parçalara bölerek çekiyoruz
    //...dt, virgülden sonrası ekleme için kullanılıyor
    //dt içerisine answers diye yeni bir alan oluşturuyoruz
    // bu alana dt içerisinde bulunan doğru ve yanlış cevapları ekliyoruz
    //shuffleArray : cevapların yerini karıştırıyor
  }));
};

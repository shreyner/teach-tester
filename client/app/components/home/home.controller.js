class HomeController {
  constructor($scope) {
    this.title = 'Добро пожаловать!';
    this.listQuestions = require('./listQuestions.json');
    this.mainForm = {"name":"Alexander","female":"man"};
    this.UserHistory = {"userData":{false},"count":0,"CorrectAnswers":0};

    this.RESULT_LOW_VERY   = "Очень низкий";
    this.RESULT_LOW        = "Низкий";
    this.RESULT_HORMAL     = "Средний";
    this.RESULT_HIGH       = "Высокий";
    this.RESULT_HIGH_VERY  = "Очень высокий";
  }

  setDataForm () {
    this.UserHistory.userData = this.mainForm;
  }

  CheckAnswer(idAnswer,index){
    if (this.listQuestions[index].successAnswer === idAnswer) {
      this.UserHistory.CorrectAnswers ++;
    }
    this.idAnswer='';
    this.UserHistory.count++;
  }

  result(){

    if (this.UserHistory.userData.female == 'man') {
      if (this.UserHistory.CorrectAnswers <= 26) {
        return this.RESULT_LOW_VERY;
      }else if (this.UserHistory.CorrectAnswers >= 27 && this.UserHistory.CorrectAnswers <= 32) {
        return this.RESULT_LOW;
      }else if (this.UserHistory.CorrectAnswers >= 33 && this.UserHistory.CorrectAnswers <= 38) {
        return this.RESULT_HORMAL;
      }else if (this.UserHistory.CorrectAnswers >= 39 && this.UserHistory.CorrectAnswers <= 47) {
        return this.RESULT_HIGH;
      }else if (this.UserHistory.CorrectAnswers >= 48) {
        return this.RESULT_HIGH_VERY;
      }
    }else{
      if (this.UserHistory.CorrectAnswers <= 17) {
        return this.RESULT_LOW_VERY;
      }else if (this.UserHistory.CorrectAnswers >= 18 && this.UserHistory.CorrectAnswers <= 22) {
        return this.RESULT_LOW;
      }else if (this.UserHistory.CorrectAnswers >= 23 && this.UserHistory.CorrectAnswers <= 27) {
        return this.RESULT_HORMAL;
      }else if (this.UserHistory.CorrectAnswers >= 28 && this.UserHistory.CorrectAnswers <= 34) {
        return this.RESULT_HIGH;
      }else if (this.UserHistory.CorrectAnswers >= 35) {
        return this.RESULT_HIGH_VERY;
      }
    }

  }

  repeat(){
    this.UserHistory.count = 0;
    this.UserHistory.CorrectAnswers=0;
  }

  reset(){
    this.UserHistory={"userData":{false},"count":0,"CorrectAnswers":0};
  }



}

HomeController.$inject=['$scope'];

export default HomeController;

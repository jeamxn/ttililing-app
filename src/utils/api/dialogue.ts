import { OpenAI } from "openai";

import { IdialogueHistory, IdialogueMessage } from "./interfaces/Idialogue";
// import { openai } from "./modules/configure";

const openai = new OpenAI({
  apiKey: ""
});

class DialogueFlow {
  dialogueMessage: IdialogueMessage[];
  dialogueSubject: string;
  constructor() {
    this.dialogueMessage = [];
    this.dialogueSubject = "";
  }
}

export default class Dialogue extends DialogueFlow {
  protected request = async (request: string) => {
    return await openai.chat.completions.create({
      model: "gpt-4",
      max_tokens: 200,
      messages: [
        {
          "role": "system",
          "content": `상황 : ${this.dialogueSubject}\n대화 내역 : ${this.dialogueMessage.toString()}`
        },
        {
          "role": "user",
          "content": request
        }
      ]
    });
  };
  /**입력받은 문자열에 대해 GPT-4가 답변한 문자열 반환 */
  answer = async (request: string) => {
    if(!this.checkSubject()) return "등록된 주제가 없습니다. 대화를 시작하기 위해 주제를 등록해 주세요.";
    this.dialogueMessage.push({
      index: this.dialogueMessage.length,
      role: "user",
      message: request
    });
    return this.request(request).then(response => {
      this.dialogueMessage.push({
        index: this.dialogueMessage.length,
        role: response.choices[0].message.role,
        message: response.choices[0].message.content
      });
      return response.choices[0].message.content;
    }); 
  };
  /**대화기록 열람 */
  history = (): IdialogueHistory | string => {
    if(!this.checkSubject()) return "등록된 주제가 없습니다. 대화를 시작하기 위해 주제를 등록해 주세요.";
    return {
      subject: this.dialogueSubject,
      message: this.dialogueMessage
    };
  };
  /**대화주제 설정 */
  setSubject = (subject: string) => {
    this.dialogueSubject = subject;
  };
  /**대화주제가 있으면 true 없으면 false 반환 */
  checkSubject = (): boolean => {
    if(this.dialogueSubject === "") return false;
    return true;
  };
  constructor() {
    super();
  }
}



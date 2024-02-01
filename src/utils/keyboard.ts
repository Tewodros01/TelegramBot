import { Markup } from "telegraf";

export class Keyboard {
  static create(buttons: string[][]): any {
    return Markup.keyboard(buttons).resize();
  }
}

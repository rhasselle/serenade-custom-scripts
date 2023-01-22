/**
 * Serenade API
 * @see https://serenade.ai/docs/api
 */
declare namespace serenade {
  interface Options {
    autoExecute?: boolean;
    chainable?: "none" | "any" | "firstOnly" | "lastOnly";
  }

  interface Api {
    click(button: "left" | "right" | "middle", count: boolean): Promise<void>;
    clickButton(button: string): Promise<void>;
    domBlur(selector: string): Promise<void>;
    domClick(selector: string): Promise<void>;
    domCopy(selector: string): Promise<void>;
    domFocus(selector: string): Promise<void>;
    domScroll(selector: string): Promise<void>;
    evaluateInPlugin(command: string): Promise<any>;
    focusApplication(application: string): Promise<void>;
    focusOrLaunchApplication(application: string): Promise<void>;
    getActiveApplication(): Promise<string>;
    getClickableButtons(): Promise<string[]>;
    getInstalledApplications(): Promise<string[]>;
    getMouseLocation(): Promise<{ x: number; y: number }>;
    getRunningApplications(): Promise<string[]>;
    launchApplication(application: string): Promise<void>;
    mouseDown(button: "left" | "right" | "middle"): Promise<void>;
    mouseUp(button: "left" | "right" | "middle"): Promise<void>;
    pressKey(key: string, modifiers?: string[], count?: boolean): Promise<void>;
    quitApplication(application: string): Promise<void>;
    runCommand(command: string): Promise<void>;
    runShell(
      command: string,
      args?: string[],
      options?: any,
      callback?: (stdout: string, stderr: string) => void
    ): Promise<{ stdout: string; stderr: string }>;
    setMouseLocation(x: number, y: number): Promise<void>;
    typeText(text: string): Promise<void>;
  }

  interface Matches {
    [match: string]: string;
  }

  type CommandID = string;

  interface CommandCallback {
    (api: Api, matches?: Matches): CommandID;
  }

  interface Builder {
    command(
      trigger: string,
      callback: CommandCallback,
      options?: Options
    ): CommandID;
    disable(ids: string | string[]): void;
    enable(ids: string | string[]): void;
    key(
      trigger: string,
      key: string,
      modifiers?: string[],
      options?: Options
    ): string;
    hint(word: string): CommandID;
    pronounce(before: string, after: string, disabled?: boolean): CommandID;
    snippet(
      templated: string,
      generated: string,
      transform:
        | "inline"
        | "argument"
        | "argument"
        | "attribute"
        | "catch"
        | "class"
        | "decorator"
        | "element"
        | "else"
        | "else_if"
        | "entry"
        | "enum"
        | "extends"
        | "finally"
        | "function"
        | "import"
        | "method"
        | "parameter"
        | "return_value"
        | "ruleset"
        | "statement"
        | "tag"
    ): CommandID;
    text(trigger: string, text: string, options?: Options): CommandID;
  }

  export function app(application: string): Builder;
  export function global(): Builder;
  export function language(language: string): Builder;
  export function extension(extension: string): Builder;
  export function url(url: string): Builder;
  export function word(word: string): Builder;
  export function hint(hint: string): Builder;
}

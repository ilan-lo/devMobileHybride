export module Validator {
    export class StringValidator {
        constructor(public contenu: string) {
        }
        public afficher(): void {
            console.log("contenu: " + this.contenu);
        }
    }
}
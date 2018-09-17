export class LoginModel {
    id: string;
    Email: string;
    Senha: string;
    
    constructor(form: any) {
        this.Email = form.email;
        this.Senha = form.senha;
    }
}
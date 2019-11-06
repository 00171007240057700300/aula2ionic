import { UsuarioProvider } from './../../providers/usuario/usuario';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroPage } from './../cadastro/cadastro';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 
  email: String;
  senha: String;
  urlImage: String = 'assets/imgs/boy.svg'
  isUsuarioValido: boolean = false
  nomeUsuario: String = ''

  constructor(public navCtrl: NavController, public navParams: NavParams, public UsuarioProvider: UsuarioProvider) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage')
  }


  
  buscarUserGithub(){
    let elementoBotao = <HTMLElement>document.querySelector('#btn-login')
    // elementoBotao.innerText = 'ENTRANDO...'
    // let corAntiga = elementoBotao.style.background
    // elementoBotao.style.background = '#7f8c8d'

    this.UsuarioProvider.buscarUserGithub (this.email).then(
      (data: any) => {
      if (data.avatar_url) {
      //se o usuário existir faça isso
      this.urlImage = data.avatar_url
      this.nomeUsuario = data.name
      this.isUsuarioValido = true
      console.log(data)
      } else {
      this.isUsuarioValido = false
      this.urlImage = 'assets/icon/boy.svg'
      }
      })  
     /* setTimeout(() => {
        if (this.email == 'admin' &&  this.senha == 'admin') {
          alert('Logado!') 
        } else {
          alert('E-mail ou senha inválidos')
        }
        elementoBotao.innerText = 'ENTRAR'
        elementoBotao.style.background = corAntiga
        
      }, 3000)*/  
  }
    
    abrirCadastro(){
      this.navCtrl.push(CadastroPage)
    }   
  }
  



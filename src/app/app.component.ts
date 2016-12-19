import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  ementasAnterior = [];
  ementasAtual = [];
  ementasProxima = [];
  nSemanaAtual = 51;
  constructor(private http: Http) { }
  
  

  ngOnInit() {
    
    this.http.get('http://ementasipleiria.site88.net/snackcampus2pt.php')
        //this.http.get('tt.json')
      .subscribe(res => {
        var ementas = JSON.parse(res["_body"]).cantina.ementas;
        for (var e in ementas) {
          console.log(ementas[e]);
            if(ementas[e]["nsemana"] == this.nSemanaAtual-1)
              this.ementasAnterior.push(ementas[e]);
              if(ementas[e]["nsemana"] == this.nSemanaAtual)
              this.ementasAtual.push(ementas[e]);
              if(ementas[e]["nsemana"] == this.nSemanaAtual+1)
              this.ementasProxima.push(ementas[e]);
        }
        console.log(this.ementasAtual);
        //this.data = res.responseData.feed;
      });
  }
}

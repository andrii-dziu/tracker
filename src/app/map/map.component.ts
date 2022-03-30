import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  title = 'tracker';
  lat:number = 50.61070656272223;
  lng:number = 26.25475752850026;
  tracks:any = []
  constructor(private zone: NgZone, private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('../../assets/tracks.json').subscribe(data => {
      this.tracks = data
      console.log(this.tracks)
    })
   
  }

}

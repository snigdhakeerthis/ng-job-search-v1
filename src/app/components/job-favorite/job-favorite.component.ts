import { NgFor, NgIf, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Jobs } from '../../models/jobs';

@Component({
  selector: 'app-job-favorite',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule],
  templateUrl: './job-favorite.component.html',
  styleUrl: './job-favorite.component.css',
})
export class JobFavoriteComponent implements OnInit {
  favoriteJobsList: Jobs[] = [];

  ngOnInit(): void {
    this.favoriteJobsList = JSON.parse(
      localStorage.getItem('favoriteJobsList')!
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService, UserProfile } from '../services/profile.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: UserProfile = { username: '', email: '', role: '' };
  editMode = false;
  editProfile: Partial<UserProfile> = {};

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile() {
    this.profileService.getProfile().subscribe({
      next: (data) => {
        this.profile = data;
        this.editProfile = { email: data.email }; 
      },
      error: (err) => console.error('Failed to load profile', err)
    });
  }

  toggleEdit() {
    this.editMode = !this.editMode;
    if (this.editMode) {
      this.editProfile = { email: this.profile.email };
    }
  }

  saveProfile() {
    this.profileService.updateProfile(this.editProfile).subscribe({
      next: (updated) => {
        this.profile = updated;
        this.editMode = false;
      },
      error: (err) => console.error('Failed to update profile', err)
    });
  }
}


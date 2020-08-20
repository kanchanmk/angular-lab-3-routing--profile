import { Component, OnInit } from "@angular/core";

import { NgForm } from "@angular/forms";
import { ProfileServiceService } from "../profile-service.service";
import { UserProfile } from "../interfaces/user-profile";
import { Router } from "@angular/router";

@Component({
	selector: "app-edit",
	templateUrl: "./edit.component.html",
	styleUrls: ["./edit.component.css"],
})
export class EditComponent implements OnInit {
	seeImgContainer: boolean = false;
	selectedImage: string = "";
	currentUser: UserProfile;
	constructor(private router: Router, private service: ProfileServiceService) {}

	ngOnInit(): void {
		this.currentUser = this.service.getUserProfile();
	}

	updateProfile(form: NgForm) {
		let userProfile: UserProfile = {
			name: form.value.name,
			contact: form.value.contact,
			bio: form.value.bio,
		};
		this.service.setUserProfile(userProfile);
		this.router.navigate(["profile"]);
	}

	toggleImageContainer() {
		this.seeImgContainer = true;
	}

	setSelected(urlPath: string) {
		this.selectedImage = urlPath;
	}
}

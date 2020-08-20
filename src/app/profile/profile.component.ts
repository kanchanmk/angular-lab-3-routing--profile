import { Component, OnInit } from "@angular/core";
import { UserProfile } from "../interfaces/user-profile";
import { ProfileServiceService } from "../profile-service.service";
@Component({
	selector: "app-profile",
	templateUrl: "./profile.component.html",
	styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
	thisProfile: UserProfile;
	constructor(private service: ProfileServiceService) {}

	ngOnInit(): void {
		this.getThisProfile();
	}

	getThisProfile() {
		this.thisProfile = this.service.getUserProfile();
	}
}

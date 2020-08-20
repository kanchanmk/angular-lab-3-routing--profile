import { Injectable } from "@angular/core";
import { UserProfile } from "./interfaces/user-profile";

@Injectable({
	providedIn: "root",
})
export class ProfileServiceService {
	currentUser: UserProfile = {
		name: "ABC",
		contact: "abc@gmail.com",
		bio: "loves soccer",
	};
	// [
	// 	{
	// 		name: "ABC",
	// 		contact: "abc@gmail.com",
	// 		bio: "loves soccer",
	// 	},
	// 	{
	// 		name: "KK",
	// 		contact: "kk@gmail.com",
	// 		bio: "loves books",
	// 	},
	// 	{
	// 		name: "DEF",
	// 		contact: "def@gmail.com",
	// 		bio: "loves music",
	// 	},
	// ];
	constructor() {}

	getUserProfile() {
		return this.currentUser;
	}

	setUserProfile(newUser: UserProfile) {
		this.currentUser = newUser;
	}
}

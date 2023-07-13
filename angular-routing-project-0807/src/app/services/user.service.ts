import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";

@Injectable()
export class UserService {

    message: string = "Manage Users";
    API_URL: string = "http://localhost:3000";

    constructor(private _httpClient: HttpClient) { }

    getAllUsers(): Observable<User[]> {
        return this._httpClient.get<User[]>
            (`${this.API_URL}/users`);
    }

    getUserById(id: number): Observable<User> {
        return this._httpClient.get<User>
            (`${this.API_URL}/users/${id}`)
    }

    deleteUserById(id: number): Observable<User> {
        return this._httpClient.delete<User>(`${this.API_URL}/users/${id}`)
    }

    addUser(user: User): Observable<User> {
        return this._httpClient.post<User>
            (`${this.API_URL}/users`, user);
    }

    updateUserById(id: number, user: User): Observable<User> {
        return this._httpClient.put<User>
            (`${this.API_URL}/users/${id}`, user);
    }

}
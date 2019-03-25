import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import {
    FE_ScalarAccountResponse,
    FE_ScalarOpenIdRequestBody,
    FE_ScalarRegisterResponse
} from "../../models/scalar-server-responses";
import { AuthedApi } from "../authed-api";

@Injectable()
export class ScalarServerApiService extends AuthedApi {
    constructor(http: Http) {
        super(http)
    }

    public ping(): Promise<any> {
        return this.http.get("/api/v1/scalar/ping").map(res => res.json()).toPromise();
    }

    public getAccount(): Promise<FE_ScalarAccountResponse> {
        return this.authedGet("/_dimension/api/v1/scalar/account").map(res => res.json()).toPromise();
    }

    public register(openId: FE_ScalarOpenIdRequestBody): Promise<FE_ScalarRegisterResponse> {
        return this.http.post("/_dimension/api/v1/scalar/register", openId).map(res => res.json()).toPromise();
    }
}

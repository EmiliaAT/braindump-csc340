package com.csc340_group_one.brain_dump;

import com.descope.client.Config;
import com.descope.client.DescopeClient;
import com.descope.exception.DescopeException;
import com.descope.model.jwt.Token;
import com.descope.sdk.auth.AuthenticationService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BrainDumpApplication {

	public static void main(String[] args) {
		SpringApplication.run(BrainDumpApplication.class, args);
	}

	public void validateSession(String sessionToken, String refreshToken) {
		var descopeClient = new DescopeClient(Config.builder().projectId("__ProjectID__").build());

		// Validate the session. Will return an error if expired
		AuthenticationService as = descopeClient.getAuthenticationServices().getAuthService();
		try {
			Token t = as.validateSessionWithToken(sessionToken);
		} catch (DescopeException de) {
			// Handle the unauthorized error
		}

		// If ValidateSessionWithRequest raises an exception, you will need to
		// refresh the session using
		try {
			Token t = as.refreshSessionWithToken(refreshToken);
		} catch (DescopeException de) {
			// Handle the unauthorized error
		}

		// Alternatively, you could combine the two and
		// have the session validated and automatically refreshed when expired
		try {
			Token t = as.validateAndRefreshSessionWithTokens(sessionToken, refreshToken);
		} catch (DescopeException de) {
			// unauthorized error
		}
	}
}

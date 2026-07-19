package com.cognizant.springjwt.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(
            @RequestHeader("Authorization") String authHeader) {

        LOGGER.debug("Authorization Header : {}", authHeader);
        Map<String, String> map = new HashMap<>();
        String token = "";
        if (authHeader != null && authHeader.startsWith("Basic ")) {
            String base64Credentials = authHeader.substring("Basic ".length()).trim();
            byte[] credDecoded = java.util.Base64.getDecoder().decode(base64Credentials);
            String credentials = new String(credDecoded, java.nio.charset.StandardCharsets.UTF_8);
            final String[] values = credentials.split(":", 2);
            String username = values[0];
            map.put("token", "");
            token = io.jsonwebtoken.Jwts.builder()
                    .setSubject(username)
                    .setIssuedAt(new java.util.Date(System.currentTimeMillis()))
                    .setExpiration(new java.util.Date(System.currentTimeMillis() + 1000 * 60 * 20))
                    .signWith(io.jsonwebtoken.SignatureAlgorithm.HS256, "secretkey")
                    .compact();
        }
        map.put("token", token);
        LOGGER.info("END");

        return map;
    }
}
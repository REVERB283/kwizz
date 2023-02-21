import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState();
	const [isUser, setIsUser] = useState(false);

	useEffect(() => {
		const unsubscribeAuthStateChanged = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setIsUser(true);
		});

		return unsubscribeAuthStateChanged;
	}, []);

	function signup(email, password) {
		return createUserWithEmailAndPassword(auth, email, password);
	}

	function login(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	function logout() {
		return signOut(auth);
	}

	const value = { currentUser, signup, login, logout };

	return <AuthContext.Provider value={value}>{isUser && children}</AuthContext.Provider>;
}

# 동네에서 놀던가 (친목 동호회)

### 파이어스토어 룰 변경하기 (로그인구현후)

rules_version = '2';

// Craft rules based on data in your Firestore database
// allow write: if firestore.get(
// /databases/(default)/documents/users/$(request.auth.uid)).data.isAdmin;
service firebase.storage {
match /b/{bucket}/o {
match /{allPaths=\*\*} {
allow read, write: if request.auth != null;
}
}
}

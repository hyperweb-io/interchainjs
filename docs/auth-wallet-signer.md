# Auth vs. Wallet vs. Signer: A Comparison

This document aims to provide an overview and comparison of `Auth`, `Wallet`, and `Signer`, three types commonly used for encryption and signing purposes in different networks. Each type serves a specific purpose and has its own characteristics and functionalities.

## 1. Auth

`Auth` is a common implementation of an encryption algorithm that can be utilized across different networks. It provides a signing method to sign binary data. The primary features and characteristics of `Auth` are as follows:

**Encryption Algorithm**: `Auth` implements an encryption algorithm that is compatible and usable across various networks.

**Signing Binary Data**: `Auth` offers a method to sign binary data, which can be used for verifying the integrity and authenticity of the data.

**Network Agnostic**: Auth is designed to work with different networks, making it a versatile solution for encryption and signing needs.

## 2. Wallet

`Wallet` is a wrapper built upon `Auth`, providing additional functionalities and convenience, particularly for Web3 usage. `Wallet` extends the capabilities of `Auth` and introduces the following aspects:

**Signing Network and Document**: In addition to signing binary data, `Wallet` provides a signing method specifically designed for signing network-related information and sign mode specified documents.

**Web3 Integration**: `Wallet` is tailored for Web3 usage, making it compatible with blockchain and decentralized applications.

**Enhanced Functionality**: `Wallet` encompasses the features of `Auth` while incorporating additional functionalities to facilitate secure interactions with Web3 wallets.

## 3. Signer

`Signer` is a class that can be constructed from `Auth` or `Wallet`. It focuses on providing a signing method specifically for directly signing human-readable messages. Key aspects of `Signer` include:

**Signing Human-Readable Messages**: `Signer` offers a dedicated signing method for signing messages that are in a human-readable format, such as plain text or structured data.

**Flexible Construction**: `Signer` can be constructed using either `Auth` or `Wallet`, allowing users to choose their preferred underlying implementation based on their specific requirements.

**Message-Level Security**: `Signer` emphasizes the signing of human-readable messages, making it suitable for use cases where secure communication and message integrity are essential.

In summary, `Auth` serves as a fundamental implementation of an encryption algorithm, providing a signing method for binary data. `Wallet`, built upon `Auth`, extends its capabilities by introducing network and document-specific signing methods, tailored for Web3 usage. `Signer`, the top-level layer, contains the code for structured data signing and focuses on dedicated methods for directly signing human-readable messages, which offers flexibility and message-level security.

The hierarchical relationship between `Auth`, `Wallet`, and `Signer` positions Auth as the foundation, Wallet as the middle layer, and Signer as the top layer with the highest-level functionality for structured data signing. However, the specific choice among `Auth`, `Wallet`, or `Signer` depends on specific requirements and use cases, ensuring the appropriate level of encryption, signing, and security for various network-related operations.
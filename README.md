# Robot Control Application

The Robot Control Application is a command-line program that allows you to control a robot's movement within a defined space. It offers features like configuring the room's shape and size, selecting the robot's language, setting the starting position, and sending commands to the robot. The application is designed to work in both square and circular rooms, with options for Swedish and English languages.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Implementation](#implementation)
- [Technical Details](#technical-details)
- [Testing](#testing)

## Features

- Configure the shape and size of the room.
- Select the language for the robot (Swedish or English).
- Set the starting position for the robot.
- Send movement commands to the robot.
- Start, stop, and continue the robot's movement.
- Add new sets of commands while preserving the current state.
- View the robot's movement history.

## Prerequisites

Before you get started, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone this repository to your local machine:


   git clone https://github.com/alitanharo/robot-control-app.git
Change into the project directory:

cd cli

Install the project dependencies:

npm install

## Usage

To launch the Robot Control Application, run the following command:
npm start

Follow the on-screen prompts to configure the room, set the robot's language, specify the starting position, and enter commands for the robot.

You can interact with the robot using the following commands:

"s + Enter ": Stop the robot.
"c+ Enter": Continue the robot.
"r + Enter": View the movement history.
"n + Enter": Add a new set of commands.
"h + Enter": Display help.
"e + Enter": Exit the application.
Once the robot is running, you can stop it or continue its movement as needed.

Examples
Example 1: 5x5 Square Room
Starting position: (1, 2)
Input: "HGHGGHGHG"
Expected result: "1 3 N"

Example 2: Circular Room
Room radius: 10
Origin point: Center
Language: English
Starting position: (0, 0)
Input: "RRFLFFLRF"
Expected result: "3 1 Ö"


## Implementation

The application consists of the following main components:

1. `RobotApp`: Manages the robot, room, and robot controller instances.
2. `CLIApp`: Handles user input and interaction.
3. `Room`: Represents the room where the robot moves.
4. `Robot`: Defines the robot's language preferences and available commands.
5. `RobotController`: Controls the robot's movements within the room.

## Technical Details

The application is implemented in JavaScript, specifically using Node.js for the command-line interface. The main implementation details include:

- Modular structure for better code organization.
- Object-oriented design with classes for the robot, room, and robot controller.
- CLI input handling with the `readline` module for user interaction.
- Command parsing and execution for robot movements.
- Error handling to ensure that the robot stays within the boundaries of the room.

## Testing

The application uses Jest, a popular JavaScript testing framework, for test automation. Jest simplifies the testing process by providing a robust and easy-to-use testing environment.

### Running Tests

To run the tests, use the following command:

```shell
npm test

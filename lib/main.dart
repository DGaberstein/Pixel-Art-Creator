import 'package:flutter/material.dart';

void main() {
  runApp(PixelArtApp());
}

class PixelArtApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Pixel Art Creator',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Pixel Art Creator'),
        leading: IconButton(
          icon: Icon(Icons.menu),
          onPressed: () {
            Scaffold.of(context).openDrawer();
          },
        ),
      ),
      drawer: Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: <Widget>[
            DrawerHeader(
              decoration: BoxDecoration(
                color: Colors.blue,
              ),
              child: Text(
                'Menu',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 24,
                ),
              ),
            ),
            ListTile(
              leading: Icon(Icons.home),
              title: Text('HOME'),
              onTap: () {
                // Handle navigation to home
              },
            ),
            ListTile(
              leading: Icon(Icons.account_circle),
              title: Text('CREATE ACCOUNT'),
              onTap: () {
                // Handle navigation to create account
              },
            ),
            ListTile(
              leading: Icon(Icons.fullscreen),
              title: Text('FULL SCREEN'),
              onTap: () {
                // Handle navigation to full screen
              },
            ),
            ListTile(
              leading: Icon(Icons.photo_album),
              title: Text('GALLERY'),
              onTap: () {
                // Handle navigation to gallery
              },
            ),
            ListTile(
              leading: Icon(Icons.school),
              title: Text('TUTORIALS'),
              onTap: () {
                // Handle navigation to tutorials
              },
            ),
            ListTile(
              leading: Icon(Icons.emoji_events),
              title: Text('CONTESTS'),
              onTap: () {
                // Handle navigation to contests
              },
            ),
            ListTile(
              leading: Icon(Icons.info),
              title: Text('ABOUT'),
              onTap: () {
                // Handle navigation to about
              },
            ),
            ListTile(
              leading: Icon(Icons.phone_android),
              title: Text('MOBILE APP'),
              onTap: () {
                // Handle navigation to mobile app
              },
            ),
            ListTile(
              leading: Icon(Icons.save),
              title: Text('SAVE DRAWING'),
              onTap: () {
                // Handle navigation to save drawing
              },
            ),
          ],
        ),
      ),
      body: Center(
        child: Text('Welcome to Pixel Art Creator!'),
      ),
    );
  }
}
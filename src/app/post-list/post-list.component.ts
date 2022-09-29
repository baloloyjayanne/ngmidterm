import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
listOfPosts: Post[]=[
  new Post(
    'The Scream',
    'https://niood.com/wp-content/uploads/2021/10/the-scream-munch-niood.jpeg',
    'The agonized face in the painting has become one of the most iconic images of art, seen as symbolizing the anxiety of the human condition.Munch recalled that he had been out for a walk at sunset when suddenly the setting sun’s light turned the clouds “a blood red”. He sensed an “infinite scream passing through nature”. Scholars have located the spot to a fjord overlooking Oslo and have suggested other explanations for the unnaturally orange sky, ranging from the effects of a volcanic eruption to a psychological reaction by Munch to his sister’s commitment at a nearby lunatic asylum.',
    'Edvard Munch',  
    new Date
  ),

  new Post(
    'Vampire (or Love and Pain)',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Edvard_Munch_-_Vampire_%281895%29_-_Google_Art_Project.jpg/1920px-Edvard_Munch_-_Vampire_%281895%29_-_Google_Art_Project.jpg',
    'The painting depicts a man and woman embracing, with the woman appearing to be either kissing or biting the man on his neck. Munch maintained it was nothing more than a woman kissing a man on the neck. The Nazis declared it morally ‘degenerate.’ In the painting, we see a man in anguish, arms around his love, while she tries to comfort him. Perhaps she is laying her face on his shoulder even. Some thought it was about his visits to prostitutes, yet others saw it as some sort of macabre fantasy about the death of his favorite sister. Evidently Munch remained ambiguous about the deeper meaning behind it.',
    'Edvard Munch',  
    new Date
  ),
  new Post(
    'Vampire (or Love and Pain)',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Edvard_Munch_-_Vampire_%281895%29_-_Google_Art_Project.jpg/1920px-Edvard_Munch_-_Vampire_%281895%29_-_Google_Art_Project.jpg',
    'The painting depicts a man and woman embracing, with the woman appearing to be either kissing or biting the man on his neck. Munch maintained it was nothing more than a woman kissing a man on the neck. The Nazis declared it morally ‘degenerate.’ In the painting, we see a man in anguish, arms around his love, while she tries to comfort him. Perhaps she is laying her face on his shoulder even. Some thought it was about his visits to prostitutes, yet others saw it as some sort of macabre fantasy about the death of his favorite sister. Evidently Munch remained ambiguous about the deeper meaning behind it.',
    'Edvard Munch',  
    new Date
  )
]


  constructor() { }

  ngOnInit(): void {
  }

}

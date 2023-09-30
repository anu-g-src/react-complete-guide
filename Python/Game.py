import random as r
CC=r.choice(['rock','paper','sissors'])
UC=input("Rock, paper, or sissors?\n").lower()

if UC==CC:
    print("TIE")
elif UC=="paper" and CC=="rock":
    print("YOU WIN!!!")
elif UC=="sissors" and CC=="paper":
    print("YOU WIN!!!")
elif UC=="rock" and CC=="sissors":
    print("YOU WIN!!!")
else:
    print('''
    HAHA, you lose.
    The computer wins''')

print(f"The computer got {CC}")
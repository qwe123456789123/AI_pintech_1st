package handgame;

import java.util.Random;
import java.util.Scanner;

    public class HandGame {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            Random random = new Random();
            String[] choices = {"가위", "바위", "보"};

            // 게임을 반복하기 위한 무한 루프
            while (true) {
                int com = random.nextInt(choices.length);
                String comChoice = choices[com];
                // 사용자 입력
                System.out.println("가위(r) 바위(s) 보(p) 중 하나 선택하세요." +
                        "\n문자로 입력\n선택 (종료하려면 q를 입력):");
                String user = scanner.nextLine().trim().toLowerCase(); // 공백 제거 및 소문자로 변환

                // 사용자가 'q'를 입력하면 게임 종료
                if (user.equals("q")) {
                    System.out.println("게임 종료!");
                    break;
                }
                // 유효한 입력인지 확인
                if (!user.equals("r") && !user.equals("s") && !user.equals("p")) {
                    System.out.println("잘못된 입력입니다. r, s, p 중 하나를 입력하세요.");
                    continue; // 잘못된 입력이면 다시 입력받음
                }
                // 컴퓨터 선택 출력
                System.out.printf("컴퓨터 : %s%n", comChoice);
                // 승패 결정
                if ((user.equals("r") && comChoice.equals("가위")) ||
                        (user.equals("s") && comChoice.equals("바위")) ||
                        (user.equals("p") && comChoice.equals("보"))) {
                    System.out.println("비김");
                } else if (
                        (user.equals("r") && comChoice.equals("보")) ||
                                (user.equals("s") && comChoice.equals("가위")) ||
                                (user.equals("p") && comChoice.equals("바위"))
                ) {
                    System.out.println("축하합니다! 이겼습니다.");
                } else {
                    System.out.println("졌습니다. 다시 도전하세요.");
                }
            }
            scanner.close(); // 스캐너 닫기
        }
    }


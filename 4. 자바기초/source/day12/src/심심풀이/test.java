package 심심풀이;

import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

public class test {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Random random = new Random();
        String[] selections = {"가위", "바위", "보"};
        String[] humanRandom = new String[5];
        String[] AIRandom = new String[5];
        // 휴먼와 인공지능의 선택 배열을 무작위로 채움
        for (int i = 0; i < humanRandom.length; i++) {
            int randomNumber = (int) (Math.random() * selections.length);
            humanRandom[i] = selections[randomNumber];
        }
        for (int i = 0; i < AIRandom.length; i++) {
            int randomNumber2 = (int) (Math.random() * selections.length);
            AIRandom[i] = selections[randomNumber2];
        }
        // 휴먼와 인공지능의 선택을 출력
        System.out.println("휴먼:\n" + Arrays.toString(humanRandom));
        System.out.println("AI:\n" + Arrays.toString(AIRandom));
        // 각 라운드 실행
        for (int i = 0; i < humanRandom.length; i++) {
            System.out.println("\n라운드 " + (i + 1));
            System.out.println("사용 할수 있는 선택지: " + Arrays.toString(humanRandom));
            // 휴먼 입력 받음
            String userChoice = "";
            boolean isValidChoice = false;
            while (!isValidChoice) {
                System.out.print("이 중 하나: ");
                userChoice = sc.nextLine();
                for (int j = 0; j < humanRandom.length; j++) {
                    if (userChoice.equals(humanRandom[j])) {
                        isValidChoice = true;
                        humanRandom[j] = "사용";  // 사용된 선택은 문자열로 대체
                        break;
                    }
                }
                if (!isValidChoice) {
                    System.out.println("잘못 다시.");
                }
            }
            // 인공지능의 선택
            String computerChoice = AIRandom[i];
            AIRandom[i] = "사용";
            // 결과 출력
            System.out.println("사용자의 선택: " + userChoice);
            System.out.println("컴퓨터의 선택: " + computerChoice);
            // 가위바위보 규칙에 따른 승패 확인
            String result = getResult(userChoice, computerChoice);
            System.out.println("결과: " + result);
        }
        sc.close();
    }
    // 가위바위보 승패를 계산
    public static String getResult(String userChoice, String computerChoice) {
        if (userChoice.equals(computerChoice)) {
            return "비김";
        } else if ((userChoice.equals("가위") && computerChoice.equals("보")) ||
                (userChoice.equals("바위") && computerChoice.equals("가위")) ||
                (userChoice.equals("보") && computerChoice.equals("바위"))) {
            return "사람 승";
        } else {
            return "인공지능 승";
        }
    }
}
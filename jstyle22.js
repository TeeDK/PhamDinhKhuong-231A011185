"use strict";

// ==================== DỮ LIỆU CHƯƠNG HỌC ====================


const chapters = [
    {
        id: 1,
        title: "Tổng quan về ngôn ngữ Java",
        description: "Tìm hiểu lịch sử, đặc điểm, môi trường phát triển và cấu trúc chương trình Java.",
        lessons: [
            {
                title: "1.1. Giới thiệu về Java",
                content: `Java là ngôn ngữ lập trình bậc cao, hướng đối tượng, được phát triển bởi Sun Microsystems và ra mắt năm 1995.

Java được sử dụng trong nhiều lĩnh vực như phát triển ứng dụng doanh nghiệp, ứng dụng Android, hệ thống quản lý, ứng dụng web và các hệ thống xử lý dữ liệu.

Những đặc điểm nổi bật:
• Đơn giản: cú pháp có cấu trúc rõ ràng, tương đối dễ tiếp cận.
• Hướng đối tượng: chương trình được tổ chức thành lớp và đối tượng.
• Độc lập nền tảng: mã Java được biên dịch thành bytecode và chạy trên JVM.
• Bảo mật: có cơ chế kiểm tra kiểu dữ liệu, quản lý bộ nhớ và kiểm soát truy cập.
• Đa luồng: hỗ trợ thực hiện nhiều công việc đồng thời.
• Thư viện phong phú: cung cấp nhiều lớp có sẵn phục vụ lập trình.

Ưu điểm: khả năng tái sử dụng mã, cộng đồng lớn, nhiều tài liệu và công cụ hỗ trợ.
Hạn chế: tiêu thụ bộ nhớ tương đối cao trong một số trường hợp và cần JVM để thực thi chương trình.`,
                syntax: "Java Source Code → Compiler → Bytecode → JVM → Kết quả",
                example: `public class Main {
    public static void main(String[] args) {
        System.out.println("Xin chao Java!");
        System.out.println("Chao mung ban den voi JavaLearn");
    }
}`,
                explanation: `public class Main khai báo lớp Main.
main() là phương thức bắt đầu thực thi chương trình.
System.out.println() in nội dung ra màn hình và xuống dòng sau khi in.`,
                errors: "Tên file phải trùng với tên lớp public. Ví dụ: lớp public Main thì tên file là Main.java. Java phân biệt chữ hoa và chữ thường."
            },
            {
                title: "1.2. JDK, JRE và JVM",
                content: `JDK (Java Development Kit) là bộ công cụ dành cho lập trình viên. JDK chứa trình biên dịch javac, công cụ chạy chương trình và các thư viện cần thiết.

JRE (Java Runtime Environment) là môi trường hỗ trợ chạy ứng dụng Java, gồm JVM và các thư viện cần thiết.

JVM (Java Virtual Machine) là máy ảo Java, chịu trách nhiệm đọc và thực thi bytecode.

Quy trình hoạt động:
1. Lập trình viên viết mã nguồn trong file .java.
2. Trình biên dịch javac chuyển mã nguồn thành bytecode trong file .class.
3. JVM nạp và kiểm tra bytecode.
4. JVM thực thi chương trình trên hệ điều hành.

Bytecode giúp chương trình Java có thể chạy trên nhiều hệ điều hành có JVM tương thích.`,
                syntax: "javac Main.java\njava Main",
                example: `// Main.java
public class Main {
    public static void main(String[] args) {
        System.out.println("Java Virtual Machine");
    }
}

// Biên dịch: javac Main.java
// Chạy: java Main`,
                explanation: "Lệnh javac dùng để biên dịch mã nguồn. Lệnh java dùng để chạy lớp đã được biên dịch.",
                errors: "Nếu hệ thống báo không tìm thấy javac hoặc java, hãy kiểm tra cài đặt JDK và biến môi trường PATH."
            },
            {
                title: "1.3. Cấu trúc chương trình Java",
                content: `Một chương trình Java cơ bản thường gồm phần khai báo package, import thư viện, khai báo lớp và phương thức main.

Các thành phần:
• class: khai báo lớp.
• main(): phương thức chính để JVM bắt đầu chạy ứng dụng thông thường.
• String[] args: mảng chứa các đối số dòng lệnh.
• System.out.print(): in nội dung nhưng không tự xuống dòng.
• System.out.println(): in nội dung và xuống dòng.
• //: chú thích một dòng.
• /* ... */: chú thích nhiều dòng.

Java sử dụng dấu ngoặc nhọn {} để xác định khối lệnh. Mỗi câu lệnh thông thường kết thúc bằng dấu chấm phẩy.`,
                syntax: `public class TenLop {
    public static void main(String[] args) {
        // Cac cau lenh
    }
}`,
                example: `public class Main {
    public static void main(String[] args) {
        // In thong tin
        System.out.print("Ho ten: ");
        System.out.println("Nguyen Van An");
        System.out.println("Lop: CNTT");
    }
}`,
                explanation: "Chương trình in thông tin họ tên và lớp. print không xuống dòng, còn println sẽ xuống dòng sau khi in.",
                errors: "Quên dấu ;, thiếu dấu ngoặc }, viết sai main thành Main hoặc đặt sai tên file là các lỗi phổ biến."
            }
        ,
            {
                "title": "1.4. Biên dịch và chạy chương trình Java",
                "content": "Quy trình làm việc cơ bản gồm viết mã nguồn, biên dịch, sửa lỗi và chạy chương trình. Mã nguồn Java thường có phần mở rộng .java. Sau khi biên dịch thành công, trình biên dịch tạo bytecode trong tệp .class.\n\nCác bước thực hiện trong terminal:\n1. Mở terminal tại thư mục chứa Main.java.\n2. Gõ javac Main.java để biên dịch.\n3. Gõ java Main để chạy lớp Main.\n4. Nếu có lỗi, đọc thông báo, xác định dòng lỗi và sửa mã nguồn.\n\nMột số IDE phổ biến: IntelliJ IDEA, Eclipse và NetBeans. Người mới học có thể dùng VS Code khi đã cài JDK và tiện ích Java phù hợp.",
                "syntax": "javac Main.java\njava Main",
                "example": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Lan dau chay Java\");\n    }\n}",
                "explanation": "javac biên dịch tệp Main.java. Lệnh java Main chạy lớp Main; khi chạy không ghi phần mở rộng .class.",
                "errors": "Tên lớp public phải trùng tên tệp. Phân biệt chữ hoa chữ thường: Main khác main. Nếu terminal không nhận lệnh javac, kiểm tra JDK và PATH."
            },
            {
                "title": "1.5. Quy tắc đặt tên, từ khóa và chú thích",
                "content": "Định danh là tên dùng để đặt cho lớp, biến, phương thức và package. Tên hợp lệ không được bắt đầu bằng chữ số, không chứa khoảng trắng và không trùng từ khóa Java.\n\nQuy ước đặt tên thường dùng:\n• Lớp: PascalCase, ví dụ StudentManager.\n• Biến và phương thức: camelCase, ví dụ studentName, calculateTotal().\n• Hằng số: chữ in hoa, các từ cách nhau bằng dấu gạch dưới, ví dụ MAX_SIZE.\n\nChú thích giúp giải thích ý nghĩa mã nguồn và không được thực thi. Có chú thích một dòng //, nhiều dòng /* ... */ và Javadoc /** ... */.",
                "syntax": "// Chu thich mot dong\n/* Chu thich\n   nhieu dong */\n/** Tai lieu cho lop/phuong thuc */\nclass StudentManager { }",
                "example": "/** Lop minh hoa cach dat ten */\npublic class StudentManager {\n    // So luong sinh vien toi da\n    static final int MAX_SIZE = 100;\n\n    public static void main(String[] args) {\n        String studentName = \"Lan\";\n        System.out.println(studentName);\n    }\n}",
                "explanation": "StudentManager theo PascalCase; studentName theo camelCase; MAX_SIZE là hằng số viết hoa. Chú thích Javadoc thường dùng để tạo tài liệu API.",
                "errors": "Không dùng dấu tiếng Việt hoặc khoảng trắng trong tên định danh khi mới học. Không đặt tên biến trùng từ khóa như class, int, public."
            }
        ]
    },
    {
        id: 2,
        title: "Biến, kiểu dữ liệu và toán tử",
        description: "Khai báo biến, hằng số, nhập xuất, ép kiểu và sử dụng các toán tử.",
        lessons: [
            {
                title: "2.1. Biến và cách khai báo biến",
                content: `Biến là vùng nhớ được đặt tên để lưu trữ dữ liệu trong quá trình chương trình hoạt động.

Cú pháp:
KieuDuLieu tenBien = giaTri;

Ví dụ:
int age = 20;
double score = 8.5;
String name = "An";

Quy tắc đặt tên:
• Không bắt đầu bằng chữ số.
• Không chứa dấu cách.
• Không trùng với từ khóa của Java.
• Phân biệt chữ hoa và chữ thường.
• Nên đặt tên có ý nghĩa, dễ đọc.

Quy ước phổ biến là camelCase: studentName, totalScore, birthYear.

Hằng số được khai báo bằng từ khóa final. Sau khi gán giá trị, hằng số không thể thay đổi.`,
                syntax: `int age = 20;
double price = 15000.5;
String name = "Khương";
final double PI = 3.14159;`,
                example: `public class Main {
    public static void main(String[] args) {
        String name = "Nguyen Van An";
        int age = 20;
        double score = 8.5;
        final String SCHOOL = "Van Hien";

        System.out.println(name);
        System.out.println(age);
        System.out.println(score);
        System.out.println(SCHOOL);
    }
}`,
                explanation: "Chương trình khai báo bốn biến/hằng số với các kiểu dữ liệu khác nhau và in giá trị ra màn hình.",
                errors: "Phải khai báo biến trước khi sử dụng. Không thể gán chuỗi trực tiếp cho biến int."
            },
            {
                title: "2.2. Các kiểu dữ liệu trong Java",
                content: `Java có 8 kiểu dữ liệu nguyên thủy:

• byte: số nguyên nhỏ, 8 bit.
• short: số nguyên 16 bit.
• int: số nguyên 32 bit.
• long: số nguyên 64 bit.
• float: số thực 32 bit.
• double: số thực 64 bit.
• char: một ký tự Unicode, 16 bit.
• boolean: giá trị true hoặc false.

Ngoài kiểu nguyên thủy, Java có kiểu tham chiếu như String, Array và các lớp do lập trình viên tạo ra.

Chọn kiểu dữ liệu phù hợp giúp tiết kiệm bộ nhớ và hạn chế sai lệch dữ liệu.

Ví dụ: dùng int cho số lượng sản phẩm, double cho giá trị có phần thập phân, boolean cho trạng thái đúng/sai.`,
                syntax: `int quantity = 10;
long population = 1000000L;
float height = 1.75f;
double average = 8.25;
char grade = 'A';
boolean passed = true;
String message = "Hello";`,
                example: `public class Main {
    public static void main(String[] args) {
        int age = 20;
        double average = 8.75;
        char grade = 'A';
        boolean passed = true;
        String name = "Minh";

        System.out.println("Ten: " + name);
        System.out.println("Tuoi: " + age);
        System.out.println("Diem: " + average);
        System.out.println("Xep loai: " + grade);
        System.out.println("Dat: " + passed);
    }
}`,
                explanation: "Dấu + có thể nối chuỗi với các giá trị khác để tạo thành một dòng thông tin.",
                errors: "Ký tự char dùng dấu nháy đơn 'A'; String dùng dấu nháy kép \"Java\". Số thực float cần hậu tố f."
            },
            {
                title: "2.3. Nhập xuất và toán tử",
                content: `Scanner là lớp thường được sử dụng để nhận dữ liệu từ bàn phím.

Cần import java.util.Scanner trước khi sử dụng.

Các phương thức:
• nextInt(): đọc số nguyên.
• nextDouble(): đọc số thực.
• next(): đọc một từ.
• nextLine(): đọc cả một dòng.
• nextBoolean(): đọc true hoặc false.

Các nhóm toán tử:
• Số học: +, -, *, /, %.
• So sánh: ==, !=, >, <, >=, <=.
• Logic: &&, ||, !.
• Gán: =, +=, -=, *=, /=.
• Tăng giảm: ++, --.

Toán tử % trả về phần dư phép chia. Ví dụ 10 % 3 bằng 1.`,
                syntax: `Scanner sc = new Scanner(System.in);
int a = sc.nextInt();
int b = sc.nextInt();
int sum = a + b;`,
                example: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Nhap a: ");
        int a = sc.nextInt();

        System.out.print("Nhap b: ");
        int b = sc.nextInt();

        System.out.println("Tong = " + (a + b));
        System.out.println("Hieu = " + (a - b));
        System.out.println("Tich = " + (a * b));

        if (b != 0) {
            System.out.println("Thuong = " + ((double)a / b));
        }
    }
}`,
                explanation: "Chương trình nhập hai số, tính tổng, hiệu, tích và thương. Ép a sang double giúp phép chia có thể trả về kết quả thập phân.",
                errors: "Không chia số nguyên cho 0. Khi dùng nextInt() rồi nextLine(), cần xử lý ký tự xuống dòng còn lại nếu muốn đọc tiếp cả dòng."
            }
        ,
            {
                "title": "2.4. Ép kiểu dữ liệu và chuyển đổi kiểu",
                "content": "Ép kiểu là chuyển một giá trị từ kiểu dữ liệu này sang kiểu khác. Java có chuyển kiểu mở rộng tự động khi kiểu đích có khả năng biểu diễn miền giá trị rộng hơn, ví dụ int sang double.\n\nChuyển kiểu thu hẹp cần viết tường minh và có thể mất dữ liệu, ví dụ double sang int sẽ bỏ phần thập phân. Có thể dùng các phương thức parseInt(), parseDouble() để chuyển chuỗi thành số.",
                "syntax": "double x = 9;       // int -> double\nint n = (int) 8.75; // double -> int\nint age = Integer.parseInt(\"20\");",
                "example": "public class Main {\n    public static void main(String[] args) {\n        int a = 7;\n        double b = a;\n        double price = 19.8;\n        int whole = (int) price;\n        int quantity = Integer.parseInt(\"12\");\n\n        System.out.println(b);\n        System.out.println(whole);\n        System.out.println(quantity);\n    }\n}",
                "explanation": "b nhận giá trị 7.0. Biến whole nhận 19 vì phần thập phân .8 bị loại bỏ. parseInt chuyển chuỗi \"12\" thành số nguyên 12.",
                "errors": "Không ép kiểu thu hẹp tùy tiện nếu cần giữ phần thập phân. parseInt sẽ phát sinh NumberFormatException nếu chuỗi không biểu diễn số nguyên hợp lệ."
            },
            {
                "title": "2.5. Phạm vi biến và hằng số",
                "content": "Phạm vi biến (scope) xác định vị trí trong chương trình mà biến có thể được truy cập. Biến cục bộ được khai báo bên trong phương thức hoặc khối lệnh và chỉ dùng trong phạm vi đó. Biến thành viên được khai báo trong lớp, bên ngoài các phương thức.\n\nTừ khóa final dùng để khai báo giá trị không thể gán lại sau khi đã khởi tạo. Hằng số thường kết hợp static final khi thuộc về lớp.\n\nNên đặt biến ở phạm vi hẹp nhất có thể để giảm nhầm lẫn và giúp chương trình dễ bảo trì.",
                "syntax": "final double VAT = 0.1;\nint total = 0;\nif (true) {\n    int bonus = 5;\n    total += bonus;\n}\n// bonus khong con truy cap duoc o day",
                "example": "public class Main {\n    static final double PI = 3.14159;\n\n    public static void main(String[] args) {\n        int radius = 3;\n        double area = PI * radius * radius;\n        System.out.println(\"Dien tich = \" + area);\n    }\n}",
                "explanation": "PI là hằng số cấp lớp. radius và area là biến cục bộ trong main nên chỉ được sử dụng trong phương thức này.",
                "errors": "Biến cục bộ phải được gán giá trị trước khi đọc. Không thể gán lại cho biến final sau khi đã khởi tạo."
            }
        ]
    },
    {
        id: 3,
        title: "Câu lệnh điều kiện",
        description: "Rẽ nhánh chương trình với if, else, switch và toán tử ba ngôi.",
        lessons: [
            {
                title: "3.1. Câu lệnh if và if...else",
                content: `Câu lệnh điều kiện cho phép chương trình lựa chọn khối lệnh cần thực hiện dựa trên một biểu thức boolean.

Cấu trúc if:
if (dieuKien) {
    // Lenh khi dieu kien dung
}

Cấu trúc if...else:
if (dieuKien) {
    // Khi dung
} else {
    // Khi sai
}

Điều kiện thường sử dụng toán tử so sánh như >, <, ==, >= và toán tử logic &&, ||.

Ví dụ ứng dụng:
• Kiểm tra số chẵn lẻ.
• Kiểm tra tuổi đủ điều kiện.
• Kiểm tra điểm đạt hay không đạt.
• Kiểm tra số dương, âm hoặc bằng 0.`,
                syntax: `if (condition) {
    statement1;
} else {
    statement2;
}`,
                example: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Nhap diem: ");
        double score = sc.nextDouble();

        if (score >= 5) {
            System.out.println("Dat");
        } else {
            System.out.println("Chua dat");
        }
    }
}`,
                explanation: "Nếu điểm lớn hơn hoặc bằng 5 thì chương trình in Đạt. Ngược lại, chương trình in Chưa đạt.",
                errors: "Điều kiện trong if phải là biểu thức boolean. Dùng == để so sánh, không dùng =."
            },
            {
                title: "3.2. Câu lệnh if...else if...else",
                content: `Khi có nhiều trường hợp cần kiểm tra, ta có thể sử dụng chuỗi if...else if...else.

Chương trình kiểm tra lần lượt từ trên xuống dưới. Khi gặp điều kiện đúng đầu tiên, khối lệnh tương ứng được thực hiện và các nhánh còn lại bị bỏ qua.

Thứ tự điều kiện rất quan trọng. Nên đặt điều kiện cụ thể hoặc giới hạn cao hơn trước khi xét các trường hợp rộng hơn.

Ví dụ xếp loại học lực:
• Điểm từ 8.0 trở lên: Giỏi.
• Điểm từ 6.5 đến dưới 8.0: Khá.
• Điểm từ 5.0 đến dưới 6.5: Trung bình.
• Dưới 5.0: Chưa đạt.

Có thể kết hợp nhiều điều kiện bằng && để kiểm tra một khoảng giá trị.`,
                syntax: `if (condition1) {
    // Truong hop 1
} else if (condition2) {
    // Truong hop 2
} else {
    // Cac truong hop con lai
}`,
                example: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double score = sc.nextDouble();

        if (score < 0 || score > 10) {
            System.out.println("Diem khong hop le");
        } else if (score >= 8) {
            System.out.println("Gioi");
        } else if (score >= 6.5) {
            System.out.println("Kha");
        } else if (score >= 5) {
            System.out.println("Trung binh");
        } else {
            System.out.println("Chua dat");
        }
    }
}`,
                explanation: "Chương trình kiểm tra điểm hợp lệ trước, sau đó xét xếp loại từ mức cao xuống thấp.",
                errors: "Nếu xét score >= 5 trước score >= 8, các mức điểm từ 8 trở lên sẽ bị xếp nhầm vào nhánh đầu tiên."
            },
            {
                title: "3.3. Câu lệnh switch và toán tử ba ngôi",
                content: `switch phù hợp khi một biểu thức cần được so sánh với nhiều giá trị cụ thể.

Cấu trúc gồm:
• switch: bắt đầu lựa chọn.
• case: khai báo trường hợp.
• break: kết thúc nhánh để tránh chạy tiếp sang case sau.
• default: trường hợp mặc định nếu không có case phù hợp.

Java hiện đại còn hỗ trợ switch expression với cú pháp mũi tên ->.

Toán tử ba ngôi có cú pháp:
ketQua = dieuKien ? giaTriDung : giaTriSai;

Toán tử này thích hợp với những lựa chọn đơn giản, không nên lồng quá nhiều điều kiện phức tạp.`,
                syntax: `switch (value) {
    case 1:
        System.out.println("Mot");
        break;
    default:
        System.out.println("Khac");
}`,
                example: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int day = sc.nextInt();

        switch (day) {
            case 2:
                System.out.println("Thu Hai");
                break;
            case 3:
                System.out.println("Thu Ba");
                break;
            case 4:
                System.out.println("Thu Tu");
                break;
            default:
                System.out.println("Ngay khac");
        }

        String result = day >= 2 && day <= 7 ? "Hop le" : "Khong hop le";
        System.out.println(result);
    }
}`,
                explanation: "switch lựa chọn ngày theo giá trị nhập vào. Toán tử ba ngôi kiểm tra ngày có nằm trong khoảng từ 2 đến 7 hay không.",
                errors: "Quên break có thể khiến chương trình chạy tiếp các case bên dưới trong switch dạng truyền thống."
            }
        ,
            {
                "title": "3.4. Kết hợp điều kiện với toán tử logic",
                "content": "Toán tử logic giúp kết hợp hoặc phủ định các biểu thức boolean. && chỉ đúng khi cả hai vế đúng; || đúng khi ít nhất một vế đúng; ! đảo ngược giá trị đúng/sai.\n\nJava có cơ chế đánh giá ngắn mạch: với A && B, nếu A sai thì B không cần đánh giá; với A || B, nếu A đúng thì B không cần đánh giá. Điều này hữu ích khi kiểm tra null hoặc điều kiện an toàn trước khi truy cập dữ liệu.",
                "syntax": "age >= 18 && hasId\nscore < 5 || absent\n!(number == 0)",
                "example": "public class Main {\n    public static void main(String[] args) {\n        int age = 20;\n        boolean hasCard = true;\n\n        if (age >= 18 && hasCard) {\n            System.out.println(\"Du dieu kien\");\n        } else {\n            System.out.println(\"Chua du dieu kien\");\n        }\n    }\n}",
                "explanation": "Điều kiện chỉ đúng khi người dùng từ 18 tuổi trở lên và đồng thời có thẻ. Nếu một vế sai, toàn bộ biểu thức && sai.",
                "errors": "Dùng && thay cho & khi muốn đánh giá ngắn mạch. Dùng ngoặc để làm rõ thứ tự khi biểu thức có nhiều toán tử."
            },
            {
                "title": "3.5. Kiểm tra dữ liệu đầu vào hợp lệ",
                "content": "Trước khi xử lý dữ liệu, cần kiểm tra miền giá trị để tránh kết quả vô nghĩa. Ví dụ điểm thường nằm trong khoảng 0 đến 10, tuổi không âm và mẫu số phép chia phải khác 0.\n\nCó thể kết hợp if với toán tử logic để kiểm tra nhiều điều kiện. Khi dữ liệu không hợp lệ, chương trình nên thông báo rõ nguyên nhân thay vì tiếp tục tính toán.",
                "syntax": "if (score < 0 || score > 10) {\n    System.out.println(\"Du lieu khong hop le\");\n} else {\n    // Xu ly du lieu\n}",
                "example": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Nhap a: \");\n        int a = sc.nextInt();\n        System.out.print(\"Nhap b: \");\n        int b = sc.nextInt();\n\n        if (b == 0) {\n            System.out.println(\"Khong the chia cho 0\");\n        } else {\n            System.out.println(\"Thuong = \" + (double) a / b);\n        }\n    }\n}",
                "explanation": "Chương trình kiểm tra b trước khi chia. Chỉ thực hiện phép chia khi mẫu số khác 0.",
                "errors": "Không chỉ kiểm tra dữ liệu ở trường hợp bình thường; hãy thử cả giá trị biên như 0, số âm và giá trị lớn hơn giới hạn."
            }
        ]
    },
    {
        id: 4,
        title: "Vòng lặp trong Java",
        description: "Sử dụng for, while, do-while, break, continue và vòng lặp lồng nhau.",
        lessons: [
            {
                title: "4.1. Vòng lặp for",
                content: `Vòng lặp for thường được sử dụng khi biết trước số lần lặp.

Cấu trúc:
for (khoiTao; dieuKien; capNhat) {
    // Than vong lap
}

Quy trình:
1. Thực hiện khởi tạo một lần.
2. Kiểm tra điều kiện.
3. Nếu đúng, thực hiện thân vòng lặp.
4. Thực hiện biểu thức cập nhật.
5. Quay lại kiểm tra điều kiện.

Vòng lặp for thường dùng để duyệt dãy số, tính tổng, tính giai thừa, in bảng cửu chương và duyệt mảng.

Có thể sử dụng vòng lặp for lồng nhau để xử lý bảng hoặc hình dạng hai chiều.`,
                syntax: `for (int i = 1; i <= 10; i++) {
    System.out.println(i);
}`,
                example: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        long sum = 0;

        for (int i = 1; i <= n; i++) {
            sum += i;
        }

        System.out.println("Tong = " + sum);
    }
}`,
                explanation: "Biến i chạy từ 1 đến n. Mỗi vòng lặp cộng i vào sum. Kết thúc vòng lặp, sum chứa tổng cần tìm.",
                errors: "Kiểm tra cẩn thận điều kiện i <= n hay i < n. Nếu cập nhật sai, vòng lặp có thể chạy vô hạn."
            },
            {
                title: "4.2. Vòng lặp while và do...while",
                content: `while kiểm tra điều kiện trước khi thực hiện thân vòng lặp. Nếu điều kiện sai ngay từ đầu, thân vòng lặp không được chạy lần nào.

Cấu trúc:
while (condition) {
    // Lenh lap
}

do...while thực hiện thân vòng lặp trước rồi mới kiểm tra điều kiện. Vì vậy thân vòng lặp luôn chạy ít nhất một lần.

Cấu trúc:
do {
    // Lenh lap
} while (condition);

Ứng dụng:
• Nhập dữ liệu đến khi hợp lệ.
• Lặp menu chương trình.
• Xử lý các bài toán chưa biết trước số lần lặp.`,
                syntax: `while (condition) {
    // Statements
}

do {
    // Statements
} while (condition);`,
                example: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n;

        do {
            System.out.print("Nhap so duong: ");
            n = sc.nextInt();
        } while (n <= 0);

        System.out.println("Ban da nhap: " + n);
    }
}`,
                explanation: "Chương trình yêu cầu nhập lại nếu n không phải số dương. do-while bảo đảm người dùng được hỏi ít nhất một lần.",
                errors: "Phải có dấu chấm phẩy sau điều kiện của do...while. Cần thay đổi biến trong vòng lặp để tránh lặp vô hạn."
            },
            {
                title: "4.3. break, continue và vòng lặp lồng nhau",
                content: `break kết thúc ngay vòng lặp gần nhất đang chứa nó.

continue bỏ qua phần lệnh còn lại của lần lặp hiện tại và chuyển sang lần lặp tiếp theo.

Vòng lặp lồng nhau là vòng lặp đặt bên trong một vòng lặp khác. Mỗi lần vòng ngoài chạy, vòng trong có thể chạy nhiều lần.

Ứng dụng:
• Tìm kiếm một giá trị và dừng khi tìm thấy.
• In các số thỏa mãn điều kiện.
• In bảng nhân, hình chữ nhật ký tự.
• Duyệt dữ liệu dạng hàng và cột.

Cần chú ý số lần lặp tăng nhanh khi sử dụng nhiều vòng lặp lồng nhau.`,
                syntax: `for (int i = 1; i <= 5; i++) {
    if (i == 3) continue;
    if (i == 5) break;
    System.out.println(i);
}`,
                example: `public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 4; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}`,
                explanation: "Vòng lặp ngoài chạy 3 lần. Mỗi lần, vòng lặp trong in 4 dấu *. Kết quả là hình chữ nhật gồm 3 hàng và 4 cột.",
                errors: "continue trong vòng while cần bảo đảm biến điều kiện vẫn được cập nhật. Nếu không, vòng lặp có thể không kết thúc."
            }
        ,
            {
                "title": "4.4. Vòng lặp for-each",
                "content": "Vòng lặp for-each dùng để duyệt lần lượt các phần tử của mảng hoặc tập hợp mà không cần quản lý chỉ số. Cú pháp ngắn gọn và dễ đọc khi chỉ cần lấy giá trị từng phần tử.\n\nNếu cần biết vị trí phần tử, thay đổi trực tiếp phần tử trong mảng hoặc duyệt theo chiều ngược, vòng for thông thường phù hợp hơn.",
                "syntax": "for (KieuDuLieu phanTu : mang) {\n    // Xu ly phan tu\n}",
                "example": "public class Main {\n    public static void main(String[] args) {\n        int[] scores = {7, 8, 9, 6};\n        int sum = 0;\n\n        for (int score : scores) {\n            sum += score;\n        }\n\n        System.out.println(\"Tong diem = \" + sum);\n    }\n}",
                "explanation": "Mỗi lượt lặp, score nhận giá trị của một phần tử trong mảng scores. Tổng được cộng dồn vào sum.",
                "errors": "Không dùng for-each nếu cần cập nhật phần tử mảng thông qua chỉ số. Biến score trong ví dụ chỉ là biến nhận giá trị của phần tử."
            },
            {
                "title": "4.5. Xây dựng thuật toán bằng vòng lặp",
                "content": "Vòng lặp thường kết hợp biến đếm, biến tích lũy và điều kiện dừng. Biến đếm theo dõi số lượt; biến tích lũy lưu kết quả đang tính như tổng hoặc tích.\n\nKhi thiết kế vòng lặp, hãy xác định rõ giá trị khởi tạo, điều kiện tiếp tục và bước cập nhật. Với bài toán tổng 1 đến n, biến sum bắt đầu bằng 0 và tăng thêm i sau mỗi lượt.",
                "syntax": "int sum = 0;\nfor (int i = 1; i <= n; i++) {\n    sum += i;\n}",
                "example": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        long sum = 0;\n\n        for (int i = 1; i <= n; i++) {\n            sum += i;\n        }\n        System.out.println(sum);\n    }\n}",
                "explanation": "Với n = 5, chương trình lần lượt cộng 1, 2, 3, 4, 5 và in ra 15. Dùng long khi tổng có thể vượt giới hạn int.",
                "errors": "Nếu quên cập nhật biến lặp trong while, chương trình có thể lặp vô hạn. Kiểm tra điều kiện <= hay < để tránh thiếu hoặc thừa một lượt."
            }
        ]
    },
    {
        id: 5,
        title: "Mảng và xử lý chuỗi",
        description: "Làm việc với mảng một chiều, mảng hai chiều và các phương thức xử lý String.",
        lessons: [
            {
                title: "5.1. Mảng một chiều",
                content: `Mảng là cấu trúc dữ liệu lưu trữ nhiều phần tử cùng kiểu dữ liệu trong một biến.

Khai báo:
int[] numbers = new int[5];

Khởi tạo:
int[] numbers = {10, 20, 30, 40, 50};

Đặc điểm:
• Chỉ số phần tử bắt đầu từ 0.
• Phần tử cuối có chỉ số length - 1.
• Thuộc tính length cho biết số lượng phần tử.
• Các phần tử trong mảng cùng kiểu dữ liệu.
• Kích thước mảng được xác định khi tạo mảng.

Các thao tác phổ biến:
• Duyệt mảng.
• Tính tổng và trung bình.
• Tìm phần tử lớn nhất, nhỏ nhất.
• Đếm số phần tử thỏa điều kiện.
• Tìm kiếm một giá trị.`,
                syntax: `int[] a = {2, 4, 6, 8};

for (int i = 0; i < a.length; i++) {
    System.out.println(a[i]);
}`,
                example: `public class Main {
    public static void main(String[] args) {
        int[] scores = {7, 8, 9, 6, 10};
        int sum = 0;
        int max = scores[0];

        for (int score : scores) {
            sum += score;
            if (score > max) {
                max = score;
            }
        }

        double average = (double) sum / scores.length;
        System.out.println("Tong = " + sum);
        System.out.println("Trung binh = " + average);
        System.out.println("Lon nhat = " + max);
    }
}`,
                explanation: "Vòng lặp for-each lần lượt lấy từng phần tử. Chương trình tính tổng, điểm trung bình và điểm lớn nhất.",
                errors: "Truy cập chỉ số âm hoặc chỉ số lớn hơn hoặc bằng length sẽ gây ArrayIndexOutOfBoundsException."
            },
            {
                title: "5.2. Mảng hai chiều",
                content: `Mảng hai chiều là mảng gồm các hàng và cột, thường được sử dụng để biểu diễn bảng dữ liệu hoặc ma trận.

Khai báo:
int[][] matrix = new int[3][4];

Truy cập phần tử:
matrix[row][column]

Có thể dùng hai vòng lặp lồng nhau:
• Vòng ngoài duyệt từng hàng.
• Vòng trong duyệt từng cột.

Ứng dụng:
• Tính tổng từng hàng, từng cột.
• Tìm phần tử lớn nhất trong ma trận.
• Tính tổng đường chéo chính.
• Biểu diễn bảng điểm hoặc bảng số liệu.

Java hỗ trợ mảng hai chiều có các hàng khác độ dài, gọi là mảng răng cưa.`,
                syntax: `int[][] a = {
    {1, 2, 3},
    {4, 5, 6}
};

System.out.println(a[0][1]);`,
                example: `public class Main {
    public static void main(String[] args) {
        int[][] a = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        int sum = 0;

        for (int i = 0; i < a.length; i++) {
            for (int j = 0; j < a[i].length; j++) {
                System.out.print(a[i][j] + " ");
                sum += a[i][j];
            }
            System.out.println();
        }

        System.out.println("Tong = " + sum);
    }
}`,
                explanation: "Chương trình duyệt toàn bộ các hàng và cột, in ma trận và tính tổng tất cả phần tử.",
                errors: "Với mảng răng cưa, nên dùng a[i].length thay vì giả định mọi hàng có cùng số cột."
            },
            {
                title: "5.3. Chuỗi String",
                content: `String là lớp dùng để biểu diễn chuỗi ký tự trong Java. String là immutable, nghĩa là nội dung đối tượng String không thay đổi sau khi được tạo.

Các phương thức quan trọng:
• length(): trả về độ dài chuỗi.
• charAt(index): lấy ký tự tại vị trí.
• equals(): so sánh nội dung hai chuỗi.
• equalsIgnoreCase(): so sánh không phân biệt hoa thường.
• contains(): kiểm tra chuỗi con.
• substring(): trích xuất một phần chuỗi.
• toLowerCase(): chuyển thành chữ thường.
• toUpperCase(): chuyển thành chữ hoa.
• trim(): loại bỏ khoảng trắng ở hai đầu.
• indexOf(): tìm vị trí xuất hiện.

Nối chuỗi có thể dùng toán tử +. Khi cần nối chuỗi nhiều lần trong vòng lặp, StringBuilder thường hiệu quả hơn.`,
                syntax: `String name = "Java Programming";
int length = name.length();
String upper = name.toUpperCase();
boolean found = name.contains("Java");`,
                example: `public class Main {
    public static void main(String[] args) {
        String text = "  Java Programming  ";
        String clean = text.trim();

        System.out.println("Chuoi: " + clean);
        System.out.println("Do dai: " + clean.length());
        System.out.println("Chu hoa: " + clean.toUpperCase());
        System.out.println("Co Java: " + clean.contains("Java"));
        System.out.println("Ky tu dau: " + clean.charAt(0));
    }
}`,
                explanation: "Chương trình loại bỏ khoảng trắng ở hai đầu, sau đó sử dụng các phương thức phổ biến để xử lý chuỗi.",
                errors: "Không nên dùng == để so sánh nội dung hai String. Hãy dùng equals() hoặc equalsIgnoreCase()."
            }
        ,
            {
                "title": "5.4. Duyệt, tìm kiếm và sắp xếp mảng",
                "content": "Các thao tác cơ bản trên mảng gồm duyệt để in phần tử, tìm kiếm phần tử, đếm phần tử thỏa điều kiện, tìm min/max và tính tổng.\n\nTìm kiếm tuyến tính kiểm tra lần lượt từng phần tử, có thể áp dụng cho mảng chưa sắp xếp và có độ phức tạp O(n). Sắp xếp nổi bọt là thuật toán nhập môn: so sánh hai phần tử kề nhau và đổi chỗ nếu sai thứ tự.",
                "syntax": "for (int i = 0; i < a.length; i++) {\n    if (a[i] == target) {\n        // Da tim thay\n    }\n}",
                "example": "public class Main {\n    public static void main(String[] args) {\n        int[] a = {5, 2, 8, 1};\n        int max = a[0];\n\n        for (int i = 1; i < a.length; i++) {\n            if (a[i] > max) max = a[i];\n        }\n        System.out.println(\"Max = \" + max);\n    }\n}",
                "explanation": "Gán max bằng phần tử đầu tiên, sau đó so sánh với các phần tử còn lại. Nếu gặp phần tử lớn hơn thì cập nhật max.",
                "errors": "Không truy cập a[a.length] vì chỉ số cuối cùng là a.length - 1. Kiểm tra mảng rỗng trước khi lấy a[0]."
            },
            {
                "title": "5.5. Các phương thức xử lý String",
                "content": "String là kiểu tham chiếu dùng để biểu diễn chuỗi ký tự. Một đối tượng String là bất biến (immutable): các phương thức xử lý chuỗi thường trả về chuỗi mới thay vì thay đổi chuỗi ban đầu.\n\nPhương thức thường dùng:\n• length(): số ký tự trong chuỗi.\n• charAt(index): lấy ký tự tại vị trí.\n• substring(begin, end): lấy chuỗi con.\n• equals(): so sánh nội dung.\n• contains(): kiểm tra chuỗi con.\n• toUpperCase(), toLowerCase(): đổi chữ hoa/thường.\n• trim(): loại bỏ khoảng trắng ở đầu và cuối.",
                "syntax": "String name = \"Java Programming\";\nname.length();\nname.charAt(0);\nname.substring(0, 4);\nname.equals(\"Java\");",
                "example": "public class Main {\n    public static void main(String[] args) {\n        String text = \"  Java Core  \";\n        String value = text.trim();\n\n        System.out.println(value.length());\n        System.out.println(value.toUpperCase());\n        System.out.println(value.contains(\"Core\"));\n        System.out.println(value.substring(0, 4));\n    }\n}",
                "explanation": "trim tạo chuỗi đã bỏ khoảng trắng hai đầu. Các lệnh tiếp theo lấy độ dài, chuyển chữ hoa, tìm chuỗi con và trích chuỗi con.",
                "errors": "Dùng equals() để so sánh nội dung String, không nên dùng ==. Chỉ số charAt bắt đầu từ 0 và phải nhỏ hơn length()."
            }
        ]
    },
    {
        id: 6,
        title: "Lập trình hướng đối tượng (OOP)",
        description: "Tìm hiểu lớp, đối tượng, constructor, đóng gói, kế thừa, đa hình và trừu tượng.",
        lessons: [
            {
                title: "6.1. Lớp và đối tượng",
                content: `Lập trình hướng đối tượng (Object-Oriented Programming - OOP) là phương pháp tổ chức chương trình dựa trên lớp (class) và đối tượng (object).

Lớp là bản thiết kế mô tả thuộc tính và hành vi chung.
Đối tượng là một thể hiện cụ thể được tạo từ lớp.

Ví dụ lớp Student:
• Thuộc tính: id, name, age, score.
• Phương thức: displayInfo(), study(), calculateResult().

Từ một lớp có thể tạo ra nhiều đối tượng với dữ liệu khác nhau.

Từ khóa new được sử dụng để tạo đối tượng. Dấu chấm được dùng để truy cập thành viên được phép truy cập của đối tượng.`,
                syntax: `class Student {
    String name;

    void display() {
        System.out.println(name);
    }
}

Student s = new Student();`,
                example: `class Student {
    String name;
    int age;

    void displayInfo() {
        System.out.println("Ten: " + name);
        System.out.println("Tuoi: " + age);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.name = "Nguyen An";
        s1.age = 20;
        s1.displayInfo();
    }
}`,
                explanation: "Student là lớp. s1 là đối tượng được tạo từ lớp Student. Đối tượng có dữ liệu riêng và gọi phương thức displayInfo().",
                errors: "Phân biệt lớp và đối tượng. Không thể truy cập thành viên không tồn tại hoặc thành viên bị giới hạn quyền truy cập."
            },
            {
                title: "6.2. Constructor và đóng gói",
                content: `Constructor là phương thức đặc biệt được gọi khi tạo đối tượng.

Đặc điểm:
• Tên constructor trùng với tên lớp.
• Không có kiểu trả về, kể cả void.
• Có thể có nhiều constructor với danh sách tham số khác nhau.
• Nếu không tự khai báo constructor, Java có thể cung cấp constructor mặc định không tham số.

Đóng gói (Encapsulation) là nguyên tắc che giấu dữ liệu bên trong lớp và cung cấp phương thức để truy cập hoặc thay đổi dữ liệu có kiểm soát.

Các từ khóa truy cập:
• private: chỉ truy cập bên trong lớp.
• public: có thể truy cập từ nơi khác.
• protected: truy cập trong cùng package và các lớp con theo quy tắc của Java.
• Không ghi từ khóa: phạm vi package-private.

Getter dùng để đọc dữ liệu; setter dùng để cập nhật dữ liệu.`,
                syntax: `class Student {
    private String name;

    public Student(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}`,
                example: `class Student {
    private String name;
    private double score;

    public Student(String name, double score) {
        this.name = name;
        setScore(score);
    }

    public String getName() {
        return name;
    }

    public void setScore(double score) {
        if (score >= 0 && score <= 10) {
            this.score = score;
        }
    }

    public double getScore() {
        return score;
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student("Minh", 8.5);
        System.out.println(s.getName());
        System.out.println(s.getScore());
    }
}`,
                explanation: "Các thuộc tính được khai báo private. Dữ liệu được đọc qua getter và cập nhật thông qua setter có kiểm tra điều kiện.",
                errors: "Constructor không có kiểu trả về. Nếu viết public void Student(), đó là phương thức thông thường chứ không phải constructor."
            },
            {
                title: "6.3. Kế thừa, đa hình và trừu tượng",
                content: `Kế thừa (Inheritance) cho phép lớp con nhận thuộc tính và phương thức có thể truy cập từ lớp cha. Java sử dụng từ khóa extends để thể hiện kế thừa lớp.

Đa hình (Polymorphism) cho phép cùng một lời gọi phương thức nhưng có hành vi khác nhau tùy đối tượng thực tế.

Ghi đè phương thức (Overriding) xảy ra khi lớp con định nghĩa lại phương thức của lớp cha với chữ ký phù hợp. Có thể dùng @Override để trình biên dịch hỗ trợ kiểm tra.

Trừu tượng hóa (Abstraction) tập trung vào những hành vi cần thiết và ẩn chi tiết triển khai.
• abstract class: lớp trừu tượng, có thể chứa phương thức abstract và phương thức thông thường.
• interface: mô tả một hợp đồng hành vi mà lớp triển khai bằng implements.

Bốn đặc trưng quan trọng của OOP:
1. Đóng gói.
2. Kế thừa.
3. Đa hình.
4. Trừu tượng.`,
                syntax: `class Animal {
    void sound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Gau gau");
    }
}`,
                example: `class Animal {
    void sound() {
        System.out.println("Am thanh dong vat");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Gau gau");
    }
}

class Cat extends Animal {
    @Override
    void sound() {
        System.out.println("Meo meo");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal a1 = new Dog();
        Animal a2 = new Cat();

        a1.sound();
        a2.sound();
    }
}`,
                explanation: "Cả Dog và Cat đều kế thừa Animal. Biến tham chiếu kiểu Animal có thể trỏ đến đối tượng Dog hoặc Cat. Phương thức sound() được thực hiện theo kiểu đối tượng thực tế.",
                errors: "Java không hỗ trợ một lớp kế thừa trực tiếp nhiều lớp cha. Phân biệt overloading (nạp chồng) với overriding (ghi đè)."
            }
        ,
            {
                "title": "6.4. Ghi đè phương thức và từ khóa super",
                "content": "Ghi đè (overriding) xảy ra khi lớp con định nghĩa lại phương thức đã có ở lớp cha với cùng chữ ký tương thích. Nhờ đó, mỗi lớp con có thể cung cấp cách thực hiện riêng. Nên dùng chú thích @Override để trình biên dịch hỗ trợ kiểm tra.\n\nTừ khóa super dùng để gọi constructor hoặc thành viên của lớp cha. Lệnh super(...) trong constructor phải đứng đầu constructor.",
                "syntax": "@Override\npublic void display() {\n    super.display();\n    // Bo sung xu ly\n}",
                "example": "class Animal {\n    void sound() {\n        System.out.println(\"Am thanh\");\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    void sound() {\n        super.sound();\n        System.out.println(\"Gau gau\");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Dog dog = new Dog();\n        dog.sound();\n    }\n}",
                "explanation": "Dog kế thừa Animal và ghi đè sound(). Lệnh super.sound() gọi phiên bản của lớp cha trước khi in hành vi riêng của Dog.",
                "errors": "Overloading là nạp chồng, còn overriding là ghi đè. Hai khái niệm khác nhau. Khi ghi đè cần giữ kiểu trả về và mức truy cập phù hợp."
            },
            {
                "title": "6.5. Interface và tổ chức chương trình hướng đối tượng",
                "content": "Interface mô tả một hợp đồng hành vi mà lớp triển khai phải cung cấp. Một lớp có thể implements nhiều interface, giúp thiết kế chương trình linh hoạt và giảm phụ thuộc vào lớp cụ thể.\n\nNên chia chương trình thành các lớp có trách nhiệm rõ ràng: lớp lưu dữ liệu, lớp xử lý nghiệp vụ và lớp giao tiếp người dùng. Đóng gói dữ liệu bằng private, cung cấp phương thức public cần thiết và ưu tiên tên lớp/phương thức thể hiện đúng nhiệm vụ.",
                "syntax": "interface Printable {\n    void print();\n}\nclass Report implements Printable {\n    public void print() {\n        System.out.println(\"Report\");\n    }\n}",
                "example": "interface Payable {\n    double calculatePay();\n}\n\nclass Employee implements Payable {\n    private double salary;\n\n    Employee(double salary) {\n        this.salary = salary;\n    }\n\n    public double calculatePay() {\n        return salary;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Payable person = new Employee(8000000);\n        System.out.println(person.calculatePay());\n    }\n}",
                "explanation": "Payable quy định hành vi calculatePay(). Employee triển khai interface. Biến person có kiểu interface nhưng tham chiếu đến đối tượng Employee.",
                "errors": "Phương thức interface thông thường phải được triển khai với mức truy cập public. Không nên đưa quá nhiều trách nhiệm không liên quan vào một lớp."
            }
        ]
    }
];



// ==================== NGAN HANG BAI TAP MAC DINH ====================
const initialExercises = [
  {
    "id": "java-01",
    "chapter": 1,
    "title": "In lời chào Java",
    "difficulty": "Dễ",
    "description": "Viết chương trình Java in đúng hai dòng: Xin chao Java! và Chao mung ban den voi JavaLearn.",
    "input": "Không có",
    "output": "Xin chao Java!\nChao mung ban den voi JavaLearn",
    "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Xin chao Java!\");\n        System.out.println(\"Chao mung ban den voi JavaLearn\");\n    }\n}",
    "concept": "Làm quen cấu trúc lớp Main, phương thức main và System.out.println."
  },
  {
    "id": "java-02",
    "chapter": 1,
    "title": "In thông tin sinh viên",
    "difficulty": "Dễ",
    "description": "Khai báo các biến hoTen, maSV, lop. In ra 3 dòng theo mẫu: Ho ten: ..., Ma SV: ..., Lop: ...",
    "input": "Không có",
    "output": "Ho ten: Nguyen Van An\nMa SV: 231A010001\nLop:  vui lòng tự điền",
    "solution": "public class Main {\n    public static void main(String[] args) {\n        String hoTen = \"Nguyen Van An\";\n        String maSV = \"231A010001\";\n        String lop = \"CNTT\";\n        System.out.println(\"Ho ten: \" + hoTen);\n        System.out.println(\"Ma SV: \" + maSV);\n        System.out.println(\"Lop: \" + lop);\n    }\n}",
    "concept": "Thực hành biến String và nối chuỗi."
  },
  {
    "id": "java-03",
    "chapter": 1,
    "title": "Tính biểu thức đơn giản",
    "difficulty": "Trung bình",
    "description": "Khai báo int a = 15, b = 4. In ra thương nguyên a / b và phần dư a % b trên hai dòng theo mẫu Thuong = ... và Du = ...",
    "input": "Không có",
    "output": "Thuong = 3\nDu = 3",
    "solution": "public class Main {\n    public static void main(String[] args) {\n        int a = 15, b = 4;\n        System.out.println(\"Thuong = \" + (a / b));\n        System.out.println(\"Du = \" + (a % b));\n    }\n}",
    "concept": "Củng cố phép chia nguyên và toán tử chia lấy dư."
  },
  {
    "id": "java-04",
    "chapter": 2,
    "title": "Tính tổng hai số nguyên",
    "difficulty": "Dễ",
    "description": "Nhập hai số nguyên a và b từ bàn phím. In tổng của hai số.",
    "input": "Hai số nguyên a, b trên cùng một dòng hoặc hai dòng.",
    "output": "Tong = 20",
    "solution": "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n        System.out.println(\"Tong = \" + (a + b));\n    }\n}",
    "concept": "Dùng Scanner để nhập dữ liệu và toán tử +."
  },
  {
    "id": "java-05",
    "chapter": 2,
    "title": "Tính chu vi và diện tích hình chữ nhật",
    "difficulty": "Trung bình",
    "description": "Nhập chiều dài và chiều rộng là hai số thực. Tính chu vi P = 2*(dai+rong) và diện tích S = dai*rong. In kết quả với nhãn Chu vi và Dien tich.",
    "input": "Hai số thực dai, rong. Giả sử đều dương.",
    "output": "Chu vi = 26.0\nDien tich = 40.0",
    "solution": "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double dai = sc.nextDouble();\n        double rong = sc.nextDouble();\n        System.out.println(\"Chu vi = \" + (2 * (dai + rong)));\n        System.out.println(\"Dien tich = \" + (dai * rong));\n    }\n}",
    "concept": "Vận dụng double, Scanner và công thức hình học."
  },
  {
    "id": "java-06",
    "chapter": 2,
    "title": "Đổi độ C sang độ F",
    "difficulty": "Khó",
    "description": "Nhập nhiệt độ C (số thực), đổi sang Fahrenheit theo công thức F = C * 9 / 5 + 32. In F.",
    "input": "Một số thực C.",
    "output": "F = 98.6",
    "solution": "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double c = sc.nextDouble();\n        double f = c * 9.0 / 5 + 32;\n        System.out.println(\"F = \" + f);\n    }\n}",
    "concept": "Chú ý dùng 9.0 để phép chia có kết quả thực."
  },
  {
    "id": "java-07",
    "chapter": 3,
    "title": "Kiểm tra số chẵn lẻ",
    "difficulty": "Dễ",
    "description": "Nhập số nguyên n. Nếu n chia hết cho 2 in Chan, ngược lại in Le.",
    "input": "Một số nguyên n.",
    "output": "Chan",
    "solution": "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        if (n % 2 == 0) System.out.println(\"Chan\");\n        else System.out.println(\"Le\");\n    }\n}",
    "concept": "Sử dụng if/else và toán tử %."
  },
  {
    "id": "java-08",
    "chapter": 3,
    "title": "Tìm số lớn nhất trong ba số",
    "difficulty": "Trung bình",
    "description": "Nhập ba số nguyên a, b, c. Tìm và in số lớn nhất theo mẫu Max = ...",
    "input": "Ba số nguyên.",
    "output": "Max = 9",
    "solution": "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt(), b = sc.nextInt(), c = sc.nextInt();\n        int max = a;\n        if (b > max) max = b;\n        if (c > max) max = c;\n        System.out.println(\"Max = \" + max);\n    }\n}",
    "concept": "So sánh lần lượt từng giá trị với biến max."
  },
  {
    "id": "java-09",
    "chapter": 3,
    "title": "Xếp loại điểm học tập",
    "difficulty": "Khó",
    "description": "Nhập điểm từ 0 đến 10. Nếu ngoài khoảng in Diem khong hop le. Từ 8 trở lên: Gioi; từ 6.5 đến dưới 8: Kha; từ 5 đến dưới 6.5: Trung binh; còn lại: Chua dat.",
    "input": "Một số thực diem.",
    "output": "Kha",
    "solution": "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double diem = sc.nextDouble();\n        if (diem < 0 || diem > 10) System.out.println(\"Diem khong hop le\");\n        else if (diem >= 8) System.out.println(\"Gioi\");\n        else if (diem >= 6.5) System.out.println(\"Kha\");\n        else if (diem >= 5) System.out.println(\"Trung binh\");\n        else System.out.println(\"Chua dat\");\n    }\n}",
    "concept": "Kiểm tra miền hợp lệ trước rồi xét các mức điểm từ cao xuống thấp."
  },
  {
    "id": "java-10",
    "chapter": 4,
    "title": "In các số từ 1 đến n",
    "difficulty": "Dễ",
    "description": "Nhập số nguyên dương n. Dùng vòng lặp for in các số từ 1 đến n, mỗi số trên một dòng.",
    "input": "Một số nguyên dương n.",
    "output": "1\n2\n3\n4\n5",
    "solution": "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        for (int i = 1; i <= n; i++) System.out.println(i);\n    }\n}",
    "concept": "Thực hành vòng lặp for và điều kiện dừng."
  },
  {
    "id": "java-11",
    "chapter": 4,
    "title": "Tính tổng các số chẵn từ 1 đến n",
    "difficulty": "Trung bình",
    "description": "Nhập n. Tính tổng tất cả số chẵn trong đoạn từ 1 đến n và in Tong = ...",
    "input": "Một số nguyên dương n.",
    "output": "Tong = 30",
    "solution": "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int sum = 0;\n        for (int i = 2; i <= n; i += 2) sum += i;\n        System.out.println(\"Tong = \" + sum);\n    }\n}",
    "concept": "Duyệt các số chẵn bằng cách tăng biến đếm thêm 2."
  },
  {
    "id": "java-12",
    "chapter": 4,
    "title": "Kiểm tra số nguyên tố",
    "difficulty": "Khó",
    "description": "Nhập số nguyên n. In YES nếu n là số nguyên tố, ngược lại in NO. Số nhỏ hơn 2 không phải số nguyên tố.",
    "input": "Một số nguyên n.",
    "output": "YES",
    "solution": "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        boolean prime = n >= 2;\n        for (int i = 2; i * i <= n && prime; i++) {\n            if (n % i == 0) prime = false;\n        }\n        System.out.println(prime ? \"YES\" : \"NO\");\n    }\n}",
    "concept": "Chỉ cần thử ước từ 2 đến căn bậc hai của n."
  },
  {
    "id": "java-13",
    "chapter": 5,
    "title": "Tính tổng phần tử mảng",
    "difficulty": "Dễ",
    "description": "Nhập n, sau đó nhập n số nguyên. Tính và in tổng các phần tử của mảng.",
    "input": "Dòng đầu là n; dòng tiếp theo gồm n số nguyên.",
    "output": "Tong = 15",
    "solution": "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] a = new int[n];\n        int sum = 0;\n        for (int i = 0; i < n; i++) {\n            a[i] = sc.nextInt();\n            sum += a[i];\n        }\n        System.out.println(\"Tong = \" + sum);\n    }\n}",
    "concept": "Khai báo mảng, nhập từng phần tử và cộng dồn."
  },
  {
    "id": "java-14",
    "chapter": 5,
    "title": "Tìm giá trị lớn nhất và nhỏ nhất trong mảng",
    "difficulty": "Trung bình",
    "description": "Nhập n và n số nguyên. Tìm giá trị lớn nhất, nhỏ nhất. In Max = ... và Min = ...",
    "input": "n >= 1; sau đó là n số nguyên.",
    "output": "Max = 9\nMin = -2",
    "solution": "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] a = new int[n];\n        for (int i = 0; i < n; i++) a[i] = sc.nextInt();\n        int max = a[0], min = a[0];\n        for (int i = 1; i < n; i++) {\n            if (a[i] > max) max = a[i];\n            if (a[i] < min) min = a[i];\n        }\n        System.out.println(\"Max = \" + max);\n        System.out.println(\"Min = \" + min);\n    }\n}",
    "concept": "Khởi tạo max và min bằng phần tử đầu tiên, tránh giả định dữ liệu dương."
  },
  {
    "id": "java-15",
    "chapter": 5,
    "title": "Đếm số lần xuất hiện của x",
    "difficulty": "Khó",
    "description": "Nhập n, tiếp theo n số nguyên của mảng, cuối cùng nhập x. Đếm số phần tử bằng x và in So lan = ...",
    "input": "n >= 1; n số nguyên; số nguyên x.",
    "output": "So lan = 2",
    "solution": "import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] a = new int[n];\n        for (int i = 0; i < n; i++) a[i] = sc.nextInt();\n        int x = sc.nextInt(), count = 0;\n        for (int value : a) if (value == x) count++;\n        System.out.println(\"So lan = \" + count);\n    }\n}",
    "concept": "Dùng biến đếm và vòng lặp for-each."
  },
  {
    "id": "java-16",
    "chapter": 6,
    "title": "Tạo lớp SinhVien",
    "difficulty": "Dễ",
    "description": "Tạo lớp SinhVien gồm hoTen, maSV và phương thức hienThi(). Trong main tạo một đối tượng, gán dữ liệu và gọi phương thức hiển thị.",
    "input": "Không có dữ liệu nhập.",
    "output": "Nguyen Van An - SV001",
    "solution": "class SinhVien {\n    String hoTen;\n    String maSV;\n    void hienThi() {\n        System.out.println(hoTen + \" - \" + maSV);\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        SinhVien sv = new SinhVien();\n        sv.hoTen = \"Nguyen Van An\";\n        sv.maSV = \"SV001\";\n        sv.hienThi();\n    }\n}",
    "concept": "Tạo lớp, thuộc tính, phương thức và khởi tạo đối tượng."
  },
  {
    "id": "java-17",
    "chapter": 6,
    "title": "Đóng gói thông tin sinh viên",
    "difficulty": "Trung bình",
    "description": "Tạo lớp SinhVien có thuộc tính private hoTen và diem. Viết constructor, getter/setter; setter chỉ nhận điểm trong khoảng 0..10. In họ tên và điểm.",
    "input": "Không có dữ liệu nhập.",
    "output": "Lan - 8.5",
    "solution": "class SinhVien {\n    private String hoTen;\n    private double diem;\n    public SinhVien(String hoTen, double diem) {\n        this.hoTen = hoTen;\n        setDiem(diem);\n    }\n    public void setDiem(double diem) {\n        if (diem >= 0 && diem <= 10) this.diem = diem;\n    }\n    public String getHoTen() { return hoTen; }\n    public double getDiem() { return diem; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        SinhVien sv = new SinhVien(\"Lan\", 8.5);\n        System.out.println(sv.getHoTen() + \" - \" + sv.getDiem());\n    }\n}",
    "concept": "Thực hành private, constructor, getter và setter."
  },
  {
    "id": "java-18",
    "chapter": 6,
    "title": "Kế thừa và ghi đè phương thức",
    "difficulty": "Khó",
    "description": "Tạo lớp Nguoi có hoTen và phương thức gioiThieu(). Tạo lớp SinhVien kế thừa Nguoi, có maSV và ghi đè gioiThieu() để in cả họ tên và mã sinh viên.",
    "input": "Không có dữ liệu nhập.",
    "output": "Toi ten An, ma SV: SV02",
    "solution": "class Nguoi {\n    protected String hoTen;\n    public Nguoi(String hoTen) { this.hoTen = hoTen; }\n    public void gioiThieu() {\n        System.out.println(\"Toi ten \" + hoTen);\n    }\n}\nclass SinhVien extends Nguoi {\n    private String maSV;\n    public SinhVien(String hoTen, String maSV) {\n        super(hoTen);\n        this.maSV = maSV;\n    }\n    @Override\n    public void gioiThieu() {\n        System.out.println(\"Toi ten \" + hoTen + \", ma SV: \" + maSV);\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Nguoi sv = new SinhVien(\"An\", \"SV02\");\n        sv.gioiThieu();\n    }\n}",
    "concept": "Sử dụng extends, super và @Override để minh họa đa hình."
  }
];


// ==================== TRẠNG THÁI WEBSITE ====================

const $ = id => document.getElementById(id);

const STORAGE = {
    exercises: "javaLearningExercises",
    history: "javaLearningHistory",
    user: "javaLearningUser",
    accounts: "javaLearningAccounts"
};

function loadData(key, fallback) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : fallback;
    } catch {
        return fallback;
    }
}

function saveData(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch {
        showToast("Không thể lưu dữ liệu trên trình duyệt.");
    }
}

// Luon nap bo bai tap chuan moi nhat; chi giu lai bai tap rieng do giao vien tao.
const savedExercises = loadData(STORAGE.exercises, []);
const customExercises = Array.isArray(savedExercises)
    ? savedExercises.filter(item => item && !String(item.id || "").startsWith("java-"))
    : [];
let exercises = [...initialExercises, ...customExercises];
saveData(STORAGE.exercises, exercises);
let currentUser = loadData(STORAGE.user, null);
let selectedExerciseId = exercises[0]?.id || null;
let authMode = "login";
let toastTimer;

// ==================== HÀM HỖ TRỢ ====================

function escapeHTML(value = "") {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

function showToast(message) {
    const toast = $("toast");
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2800);
}

function levelClass(level) {
    if (level === "Dễ") return "easy";
    if (level === "Khó") return "hard";
    return "medium";
}

function isTeacher() {
    return currentUser?.role === "teacher";
}

function getHistory() {
    return loadData(STORAGE.history, []);
}

// ==================== HIỂN THỊ CHƯƠNG HỌC ====================

function renderChapters() {
    const grid = $("chapterGrid");
    if (!grid) return;

    const icons = ["☕", "⌨️", "🔀", "🔁", "📚", "🧩"];
    const colors = ["#e9efff", "#e8f8f1", "#fff2df", "#fceafa", "#e8f5ff", "#f1edff"];

    grid.innerHTML = chapters.map((chapter, index) => {
        const count = exercises.filter(
            exercise => Number(exercise.chapter) === chapter.id
        ).length;

        return `
            <article class="chapter-card">
                <div class="chapter-top">
                    <span class="chapter-icon" style="background:${colors[index % colors.length]}">
                        ${icons[index % icons.length]}
                    </span>
                    <span class="chapter-number">CHƯƠNG 0${chapter.id}</span>
                </div>
                <h3>${escapeHTML(chapter.title)}</h3>
                <p>${escapeHTML(chapter.description)}</p>
                <div class="chapter-meta">
                    <span>📖 ${chapter.lessons.length} bài học</span>
                    <span>✍️ ${count} bài tập</span>
                </div>
                <button class="btn btn-primary chapter-open-btn" data-open-chapter="${chapter.id}">
                    Xem nội dung chương →
                </button>
            </article>
        `;
    }).join("");

    // Dung event delegation de nut xem noi dung van hoat dong sau moi lan render.
    if (!grid.dataset.chapterClickBound) {
        grid.addEventListener("click", event => {
            const button = event.target.closest("[data-open-chapter]");
            if (!button) return;
            openChapter(Number(button.dataset.openChapter));
        });
        grid.dataset.chapterClickBound = "true";
    }
}

function openChapter(id) {
    const chapter = chapters.find(item => item.id === id);
    if (!chapter) return;

    const chapterExercises = exercises.filter(
        item => Number(item.chapter) === id
    );

    let content = `
        <p>${escapeHTML(chapter.description)}</p>
        <h3>Nội dung lý thuyết</h3>
        <ol class="lesson-list">
            ${chapter.lessons.map((lesson, index) => `
                <li class="lesson-detail">
                    <h4>${escapeHTML(lesson.title || `Bài ${index + 1}`)}</h4>
                    <p>${escapeHTML(lesson.content || lesson.description || "")}</p>
                    ${lesson.syntax ? `<h5>Cú pháp / ghi nhớ</h5><pre><code>${escapeHTML(lesson.syntax)}</code></pre>` : ""}
                    ${lesson.example ? `<h5>Ví dụ minh họa</h5><pre><code>${escapeHTML(lesson.example)}</code></pre>` : ""}
                    ${lesson.explanation ? `<p><b>Giải thích:</b> ${escapeHTML(lesson.explanation)}</p>` : ""}
                    ${lesson.errors ? `<p class="lesson-warning"><b>Lưu ý:</b> ${escapeHTML(lesson.errors)}</p>` : ""}
                </li>
            `).join("")}
        </ol>

        <h3>Bài tập và lời giải mẫu</h3>
        <ol class="lesson-list">
            ${chapterExercises.map(exercise => `
                <li>
                    <b>${escapeHTML(exercise.title)}</b>
                    <span class="level ${levelClass(exercise.difficulty)}">
                        ${escapeHTML(exercise.difficulty)}
                    </span>
                    <p>${escapeHTML(exercise.description)}</p>

                    <button class="btn btn-light"
                        data-start-exercise="${escapeHTML(exercise.id)}">
                        Thực hành bài này
                    </button>

                    <details>
                        <summary>Xem lời giải mẫu</summary>
                        <pre><code>${escapeHTML(exercise.solution || "Chưa có lời giải.")}</code></pre>
                    </details>
                </li>
            `).join("")}
        </ol>
    `;

    let modal = $("lessonModal");

    if (!modal) {
        modal = document.createElement("div");
        modal.id = "lessonModal";
        modal.className = "modal";

        modal.innerHTML = `
            <div class="lesson-modal">
                <button class="modal-close" id="closeLesson">×</button>
                <div id="lessonContent"></div>
            </div>
        `;

        document.body.appendChild(modal);

        $("closeLesson").addEventListener("click", () => {
            modal.classList.add("hidden");
        });

        modal.addEventListener("click", event => {
            if (event.target === modal) {
                modal.classList.add("hidden");
            }
        });
    }

    $("lessonContent").innerHTML = `
        <span class="eyebrow">BÀI GIẢNG JAVA</span>
        <h2>Chương ${id}: ${escapeHTML(chapter.title)}</h2>
        ${content}
    `;

    modal.classList.remove("hidden");

    modal.querySelectorAll("[data-start-exercise]").forEach(button => {
        button.addEventListener("click", () => {
            selectedExerciseId = button.dataset.startExercise;
            renderExercises();
            modal.classList.add("hidden");
            activatePanel("practicePanel");

            $("practice").scrollIntoView({ behavior: "smooth" });
        });
    });
}

function getLessonDescription(chapter, index) {
    const descriptions = {
        1: [
            "Java là ngôn ngữ lập trình hướng đối tượng, có khả năng chạy trên nhiều nền tảng nhờ JVM.",
            "Chương trình Java thường có class và phương thức main làm điểm bắt đầu thực thi.",
            "Các kiểu dữ liệu thường gặp gồm int, long, double, char và boolean.",
            "Scanner hỗ trợ nhập dữ liệu; System.out.println dùng để xuất dữ liệu."
        ],
        2: [
            "Các toán tử gồm +, -, *, /, %, toán tử so sánh và toán tử logic.",
            "Ép kiểu giúp chuyển dữ liệu giữa các kiểu tương thích.",
            "if và else cho phép chương trình lựa chọn nhánh theo điều kiện.",
            "switch-case phù hợp khi cần xử lý nhiều trường hợp của một giá trị."
        ],
        3: [
            "for, while và do-while giúp thực hiện một nhóm lệnh lặp lại.",
            "break kết thúc vòng lặp; continue bỏ qua phần còn lại của lượt lặp.",
            "Mảng lưu nhiều phần tử cùng kiểu, với chỉ số bắt đầu từ 0.",
            "Các thuật toán cơ bản gồm tìm kiếm tuyến tính, tìm min/max và sắp xếp."
        ],
        4: [
            "Phương thức giúp chia chương trình thành các phần nhỏ có thể tái sử dụng.",
            "Tham số truyền dữ liệu vào phương thức; return trả về kết quả.",
            "String cung cấp các phương thức length, charAt, equals và substring.",
            "Đệ quy là kỹ thuật phương thức tự gọi lại chính nó và cần điều kiện dừng."
        ],
        5: [
            "Class là khuôn mẫu; object là đối tượng cụ thể được tạo từ class.",
            "Constructor khởi tạo đối tượng; đóng gói giúp bảo vệ dữ liệu.",
            "extends cho phép lớp con kế thừa thuộc tính và phương thức lớp cha.",
            "Đa hình cho phép xử lý các đối tượng khác nhau qua cùng một giao diện."
        ],
        6: [
            "try-catch giúp xử lý tình huống bất thường trong quá trình chạy.",
            "throw chủ động ném ngoại lệ; throws khai báo ngoại lệ có thể phát sinh.",
            "Các lớp I/O hỗ trợ đọc và ghi dữ liệu từ tệp.",
            "Hãy kiểm tra đầu vào, đặt tên rõ ràng và chia chương trình thành phương thức."
        ]
    };

    return descriptions[chapter]?.[index] ||
        "Đọc kỹ khái niệm, xem ví dụ và tự viết một chương trình nhỏ để luyện tập.";
}

// ==================== DANH SÁCH BÀI TẬP ====================

function renderExercises() {
    const difficultyElement = $("difficultyFilter");
    const chapterElement = $("chapterFilter");
    const searchElement = $("searchExercise");

    const difficulty = difficultyElement ? difficultyElement.value : "all";
    const chapterFilter = chapterElement ? chapterElement.value : "all";
    const keyword = searchElement ? searchElement.value.trim().toLocaleLowerCase("vi") : "";

    const filtered = exercises.filter(exercise => {
        const matchDifficulty = difficulty === "all" || exercise.difficulty === difficulty;
        const matchChapter = chapterFilter === "all" || String(exercise.chapter) === chapterFilter;
        const searchable = `${exercise.title || ""} ${exercise.description || ""} ${exercise.concept || ""}`.toLocaleLowerCase("vi");
        return matchDifficulty && matchChapter && (!keyword || searchable.includes(keyword));
    });

    if (!filtered.some(item => item.id === selectedExerciseId)) {
        selectedExerciseId = filtered[0]?.id || null;
    }

    const list = $("exerciseList");
    if (!list) return;

    const levels = [
        { name: "Dễ", className: "easy", description: "Nền tảng – làm quen cú pháp và thao tác cơ bản." },
        { name: "Trung bình", className: "medium", description: "Vận dụng – kết hợp nhiều kiến thức đã học." },
        { name: "Khó", className: "hard", description: "Nâng cao – phân tích vấn đề và xây dựng thuật toán." }
    ];

    const chapterNames = {
        1: "Tổng quan về ngôn ngữ Java",
        2: "Biến, kiểu dữ liệu và nhập xuất",
        3: "Câu lệnh điều kiện",
        4: "Vòng lặp",
        5: "Mảng và chuỗi",
        6: "Lập trình hướng đối tượng"
    };

    if (!filtered.length) {
        list.innerHTML = '<div class="empty-state">Không tìm thấy bài tập phù hợp. Hãy chọn chương, mức độ hoặc từ khóa khác.</div>';
    } else {
        const chapterNumbers = chapterFilter === "all"
            ? [1, 2, 3, 4, 5, 6]
            : [Number(chapterFilter)];

        list.innerHTML = chapterNumbers.map(chapterNumber => {
            const chapterItems = filtered.filter(item => Number(item.chapter) === chapterNumber);
            if (!chapterItems.length) return "";

            const levelGroups = levels.map(level => {
                const items = chapterItems.filter(item => item.difficulty === level.name);
                if (!items.length) return "";
                return `
                    <section class="exercise-level-group ${level.className}">
                        <header class="exercise-level-heading">
                            <div>
                                <span class="level ${levelClass(level.name)}">${level.name}</span>
                                <p>${level.description}</p>
                            </div>
                            <strong>${items.length} bài</strong>
                        </header>
                        <div class="exercise-level-items">
                            ${items.map(exercise => `
                                <button type="button" class="exercise-item ${exercise.id === selectedExerciseId ? "selected" : ""}"
                                    data-exercise-id="${escapeHTML(exercise.id)}">
                                    <span class="exercise-radio"></span>
                                    <span class="exercise-item-content">
                                        <b>${escapeHTML(exercise.title)}</b>
                                        <small>${escapeHTML(exercise.concept || "Thực hành Java")}</small>
                                    </span>
                                    <span class="level ${levelClass(exercise.difficulty)}">${escapeHTML(exercise.difficulty)}</span>
                                </button>
                            `).join("")}
                        </div>
                    </section>`;
            }).join("");

            return `
                <section class="chapter-exercise-group">
                    <header class="chapter-exercise-heading">
                        <span class="chapter-exercise-number">CHƯƠNG ${chapterNumber}</span>
                        <h4>${escapeHTML(chapterNames[chapterNumber] || `Chương ${chapterNumber}`)}</h4>
                        <span class="chapter-exercise-count">${chapterItems.length} bài tập</span>
                    </header>
                    ${levelGroups}
                </section>`;
        }).join("");
    }

    list.querySelectorAll("[data-exercise-id]").forEach(item => {
        item.addEventListener("click", () => {
            selectedExerciseId = item.dataset.exerciseId;
            renderExercises();
        });
    });

    renderSelectedExercise();
}

function renderSelectedExercise() {
    const exercise = exercises.find(
        item => String(item.id) === String(selectedExerciseId)
    );
    const selectedBox = $("selectedExercise");
    const resultBox = $("resultBox");
    const editor = $("codeEditor");

    if (resultBox) {
        resultBox.className = "result-box";
        resultBox.innerHTML = "";
    }

    if (!exercise) {
        if (selectedBox) {
            selectedBox.textContent = "Hãy chọn một bài tập trong danh sách phía trên.";
        }
        if (editor) editor.value = "";
        return;
    }

    if (selectedBox) {
        selectedBox.innerHTML = `
            <div class="selected-exercise-heading">
                <strong>${escapeHTML(exercise.title)}</strong>
                <span class="level ${levelClass(exercise.difficulty)}">${escapeHTML(exercise.difficulty || "")}</span>
            </div>
            <p>${escapeHTML(exercise.description || "Chưa có mô tả bài tập.")}</p>
            <p><b>Đầu vào mẫu:</b> ${escapeHTML(exercise.input || "Không có")}</p>
            <p><b>Đầu ra mong đợi:</b> ${escapeHTML(exercise.output || "Chưa thiết lập")}</p>
        `;
    }

    if (editor) {
        editor.value = `public class Main {
    public static void main(String[] args) {
        // Viet loi giai cho bai tap: ${exercise.title.replace(/[\r\n]/g, " ")}
    }
}`;
    }
}

// ==================== CHẤM ĐIỂM MÔ PHỎNG ====================

// Lưu ý: Hàm này không biên dịch hoặc chạy mã Java thật.
// Đây chỉ là minh họa giao diện chấm bài phía trình duyệt.

function gradeSubmission(exercise, code) {
    const source = String(code || "").trim();

    if (!source) {
        return {
            passed: 0,
            total: 5,
            score: 0,
            message: "Bạn chưa nhập lời giải."
        };
    }

    const hasClass = /\bclass\s+\w+/.test(source);
    const hasMain = /static\s+void\s+main\s*\(/.test(source);
    const hasOutput = /System\s*\.\s*out\s*\.\s*(println|print|printf)/i.test(source);

    const looksLikeJava = hasClass && hasMain && hasOutput;

    let passed = 0;

    if (looksLikeJava) {
        // Điểm này là điểm mô phỏng, không khẳng định code chạy đúng.
        passed = 2;

        const normalized = source.toLowerCase();
        const expected = String(exercise.output || "").toLowerCase();

        if (expected && normalized.includes(expected)) {
            passed = 5;
        }
    }

    return {
        passed,
        total: 5,
        score: passed * 2,
        message: passed === 5
            ? "Mã nguồn đáp ứng các tiêu chí mô phỏng."
            : "Chưa đủ điều kiện đạt toàn bộ test mô phỏng. Hãy kiểm tra lại lời giải."
    };
}

// ==================== LƯU KẾT QUẢ ====================

function saveResult(title, score, maxScore, type, name, studentId) {
    const history = getHistory();

    history.push({
        title,
        score,
        maxScore,
        type,
        name,
        studentId,
        date: new Date().toLocaleString("vi-VN")
    });

    saveData(STORAGE.history, history);
    renderHistory();
}

function renderHistory() {
    const history = getHistory();

    if (history.length === 0) {
        $("historyList").innerHTML =
            '<div class="empty-state">Chưa có kết quả. Hãy làm bài tập đầu tiên!</div>';
        return;
    }

    $("historyList").innerHTML = [...history].reverse().map(item => `
        <div class="history-row">
            <div>
                <b>${escapeHTML(item.title)}</b>
                <small>
                    ${escapeHTML(item.name)} · ${escapeHTML(item.studentId)}
                    · ${escapeHTML(item.type)} · ${escapeHTML(item.date)}
                </small>
            </div>
            <span class="score-pill">
                ${item.score}/${item.maxScore} điểm
            </span>
        </div>
    `).join("");
}

function validateStudent(name, studentId) {
    if (!name.trim() || !studentId.trim()) {
        showToast("Vui lòng nhập họ tên và mã sinh viên.");
        return false;
    }

    return true;
}

function submitPractice() {
    const exercise = exercises.find(
        item => item.id === selectedExerciseId
    );

    if (!exercise) {
        showToast("Bạn hãy chọn một bài tập.");
        return;
    }

    const name = $("studentName").value.trim();
    const studentId = $("studentId").value.trim();

    if (!validateStudent(name, studentId)) return;

    const result = gradeSubmission(exercise, $("codeEditor").value);

    const resultBox = $("resultBox");
    if (!resultBox) return;
    resultBox.className = "result-box show" + (result.passed === 5 ? "" : " error");

    resultBox.innerHTML = `
        <b>${result.passed === 5 ? "✓ Hoàn thành" : "◷ Cần kiểm tra lại"}</b>
        <br>${escapeHTML(result.message)}
        <br>Số test mô phỏng đạt: ${result.passed}/5
        <br>Điểm mô phỏng: <b>${result.score}/10</b>
        <br><small>Điểm chưa được xác minh bằng trình biên dịch Java thật.</small>
    `;

    saveResult(
        exercise.title,
        result.score,
        10,
        "Luyện tập",
        name,
        studentId
    );

    showToast("Đã ghi nhận kết quả mô phỏng.");
}

// ==================== ĐĂNG NHẬP / ĐĂNG KÝ ====================

function updateRoleUI() {
    $("roleLabel").textContent = currentUser
        ? (isTeacher() ? "Giáo viên" : "Sinh viên")
        : "Khách";

    $("loginBtn").textContent = currentUser ? "Tài khoản" : "Đăng nhập";
    $("registerBtn").textContent = currentUser ? "Đăng xuất" : "Đăng ký";

    document.querySelectorAll(".teacher-only").forEach(element => {
        element.classList.toggle("hidden", !isTeacher());
    });

    if (!isTeacher() && $("teacherPanel").classList.contains("active")) {
        activatePanel("practicePanel");
    }
}

function openAuth(mode) {
    authMode = mode;

    $("authTitle").textContent = mode === "login"
        ? "Chào mừng trở lại!"
        : "Tạo tài khoản học tập";

    $("authDescription").textContent = mode === "login"
        ? "Đăng nhập để tiếp tục hành trình học Java."
        : "Tạo tài khoản demo để sử dụng website.";

    $("authSubmit").textContent = mode === "login"
        ? "Đăng nhập"
        : "Tạo tài khoản";

    $("authNameLabel").classList.toggle("hidden", mode === "login");
    $("authRoleLabel").classList.toggle("hidden", mode === "login");

    $("authSwitchText").innerHTML = mode === "login"
        ? 'Chưa có tài khoản? <button id="switchAuth" type="button">Đăng ký ngay</button>'
        : 'Đã có tài khoản? <button id="switchAuth" type="button">Đăng nhập</button>';

    $("switchAuth").addEventListener("click", () => {
        openAuth(authMode === "login" ? "register" : "login");
    });

    $("authModal").classList.remove("hidden");
}

function closeAuth() {
    $("authModal").classList.add("hidden");
}

function handleAuth(event) {
    event.preventDefault();

    const username = $("authUsername").value.trim();
    const password = $("authPassword").value;

    if (!username || !password) {
        showToast("Vui lòng nhập tên đăng nhập và mật khẩu.");
        return;
    }

    const accounts = loadData(STORAGE.accounts, []);

    if (authMode === "register") {
        if (accounts.some(account =>
            account.username.toLowerCase() === username.toLowerCase()
        )) {
            showToast("Tên đăng nhập đã tồn tại.");
            return;
        }

        const account = {
            username,
            password,
            name: $("authName").value.trim() || username,
            role: $("authRole").value
        };

        accounts.push(account);
        saveData(STORAGE.accounts, accounts);

        currentUser = {
            username: account.username,
            name: account.name,
            role: account.role
        };

        saveData(STORAGE.user, currentUser);
        closeAuth();
        updateRoleUI();
        showToast("Tạo tài khoản demo thành công.");
        return;
    }

    let account = accounts.find(item =>
        item.username === username && item.password === password
    );

    // Tài khoản minh họa để xem chức năng phân quyền.
    if (!account && username === "teacher" && password === "java123") {
        account = {
            username: "teacher",
            name: "Giáo viên Demo",
            role: "teacher"
        };
    }

    if (!account && username === "student" && password === "java123") {
        account = {
            username: "student",
            name: "Sinh viên Demo",
            role: "student"
        };
    }

    if (!account) {
        showToast("Sai tài khoản hoặc mật khẩu. Xem tài khoản demo bên dưới form.");
        return;
    }

    currentUser = {
        username: account.username,
        name: account.name,
        role: account.role
    };

    saveData(STORAGE.user, currentUser);

    $("studentName").value = currentUser.name;
    $("studentId").value = currentUser.username;
    $("examName").value = currentUser.name;
    $("examStudentId").value = currentUser.username;

    closeAuth();
    updateRoleUI();
    showToast("Đăng nhập thành công.");
}

// ==================== PHÂN QUYỀN VÀ MENU ====================

function activatePanel(panelId) {
    if (panelId === "teacherPanel" && !isTeacher()) {
        showToast("Bạn cần đăng nhập bằng vai trò Giáo viên.");
        return;
    }

    document.querySelectorAll(".panel").forEach(panel => {
        panel.classList.toggle("active", panel.id === panelId);
    });

    document.querySelectorAll(".side-link").forEach(button => {
        button.classList.toggle("active", button.dataset.panel === panelId);
    });
}

// ==================== GIÁO VIÊN THÊM BÀI TẬP ====================

function renderTeacherList() {
    $("teacherExerciseList").innerHTML = exercises.map(exercise => `
        <div class="teacher-row">
            <div>
                <b>${escapeHTML(exercise.title)}</b>
                <small>
                    Chương ${exercise.chapter} · ${escapeHTML(exercise.difficulty)}
                    · ${(exercise.tests || []).length} test
                </small>
            </div>
            <button class="delete-btn"
                data-delete-exercise="${escapeHTML(exercise.id)}">
                Xóa
            </button>
        </div>
    `).join("");

    document.querySelectorAll("[data-delete-exercise]").forEach(button => {
        button.addEventListener("click", () => {
            if (!isTeacher()) {
                showToast("Chỉ giáo viên mới được quản lý bài tập.");
                return;
            }

            if (!confirm("Bạn có chắc muốn xóa bài tập này?")) return;

            exercises = exercises.filter(
                item => item.id !== button.dataset.deleteExercise
            );

            saveData(STORAGE.exercises, exercises);

            if (selectedExerciseId === button.dataset.deleteExercise) {
                selectedExerciseId = exercises[0]?.id || null;
            }

            refreshWebsite();
            showToast("Đã xóa bài tập.");
        });
    });
}

function handleTeacherForm(event) {
    event.preventDefault();

    if (!isTeacher()) {
        showToast("Hãy đăng nhập bằng vai trò Giáo viên.");
        return;
    }

    const title = $("newTitle").value.trim();
    const description = $("newDescription").value.trim();

    if (!title || !description) {
        showToast("Vui lòng nhập tên và nội dung đề bài.");
        return;
    }

    const input = $("newInput").value.trim();
    const output = $("newOutput").value.trim();

    const newExercise = {
        id: "custom_" + Date.now(),
        chapter: Number($("newChapter").value),
        title,
        difficulty: $("newDifficulty").value,
        description,
        input,
        output,
        solution: $("newSolution").value,
        tests: Array.from({ length: 5 }, () => [input, output])
    };

    exercises.push(newExercise);
    saveData(STORAGE.exercises, exercises);

    selectedExerciseId = newExercise.id;

    event.target.reset();
    refreshWebsite();
    showToast("Đã thêm bài tập với 5 test mẫu.");
}

// ==================== KIỂM TRA VÀ THI ====================

function startExam() {
    const name = $("examName").value.trim();
    const studentId = $("examStudentId").value.trim();

    if (!validateStudent(name, studentId)) return;

    const type = document.querySelector(
        'input[name="examType"]:checked'
    ).value;

    const count = type === "Kiểm tra"
        ? 1
        : Number($("examCount").value);

    if (exercises.length < count) {
        showToast("Không đủ bài tập để tạo đề.");
        return;
    }

    const examExercises = [...exercises]
        .sort(() => Math.random() - 0.5)
        .slice(0, count);

    const workspace = $("examWorkspace");

    workspace.classList.remove("hidden");

    workspace.innerHTML = `
        <h3>${type} lập trình Java</h3>
        <p class="muted">
            ${count} bài · Mỗi bài tối đa 10 điểm.
            Đây là chức năng chấm mô phỏng phía trình duyệt.
        </p>

        ${examExercises.map((exercise, index) => `
            <article class="exam-task"
                data-exam-id="${escapeHTML(exercise.id)}">
                <h4>
                    Câu ${index + 1}: ${escapeHTML(exercise.title)}
                    <span class="level ${levelClass(exercise.difficulty)}">
                        ${escapeHTML(exercise.difficulty)}
                    </span>
                </h4>

                <p>${escapeHTML(exercise.description)}</p>

                <label>
                    Lời giải Java
                    <textarea class="exam-code"
                        spellcheck="false"
                        placeholder="Nhập lời giải câu ${index + 1}..."></textarea>
                </label>
            </article>
        `).join("")}

        <button class="btn btn-primary" id="submitExam">
            Nộp bài và xem điểm →
        </button>

        <div id="examResult" class="result hidden"></div>
    `;

    $("submitExam").addEventListener("click", () => {
        const tasks = [...workspace.querySelectorAll(".exam-task")];

        let totalScore = 0;
        const details = [];

        tasks.forEach((task, index) => {
            const exercise = exercises.find(
                item => item.id === task.dataset.examId
            );

            const code = task.querySelector(".exam-code").value;
            const result = gradeSubmission(exercise, code);

            totalScore += result.score;

            details.push(
                `Câu ${index + 1}: ${result.score}/10 điểm`
            );
        });

        const maxScore = tasks.length * 10;
        totalScore = Math.round(totalScore * 10) / 10;

        const resultBox = $("examResult");

        resultBox.className =
            "result" + (totalScore === maxScore ? "" : " error");

        resultBox.innerHTML = `
            <b>Đã hoàn thành ${escapeHTML(type.toLowerCase())}.</b>
            <br>${details.map(escapeHTML).join("<br>")}
            <br><b>Tổng điểm: ${totalScore}/${maxScore}</b>
            <br><small>Điểm được tính bằng bộ tiêu chí mô phỏng, chưa chạy mã Java.</small>
        `;

        saveResult(
            `${type} (${tasks.length} bài)`,
            totalScore,
            maxScore,
            type,
            name,
            studentId
        );

        $("submitExam").disabled = true;
        $("submitExam").textContent = "Đã nộp bài";

        showToast(`Đã ghi nhận ${totalScore}/${maxScore} điểm.`);
    });

    workspace.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// ==================== KHỞI TẠO WEBSITE ====================

function refreshWebsite() {
    renderChapters();
    renderExercises();
    renderTeacherList();
    renderHistory();
    updateRoleUI();
}

document.addEventListener("DOMContentLoaded", () => {
    refreshWebsite();

    if (currentUser) {
        $("studentName").value = currentUser.name || "";
        $("studentId").value = currentUser.username || "";
        $("examName").value = currentUser.name || "";
        $("examStudentId").value = currentUser.username || "";
    }

    const bind = (id, eventName, handler) => {
        const element = $(id);
        if (element) element.addEventListener(eventName, handler);
    };

    bind("loginBtn", "click", () => {
        if (currentUser) showToast(`Bạn đang đăng nhập: ${currentUser.name}`);
        else if (typeof openAuth === "function") openAuth("login");
    });

    bind("registerBtn", "click", () => {
        if (currentUser) {
            currentUser = null;
            saveData(STORAGE.user, null);
            updateRoleUI();
            showToast("Đã đăng xuất.");
        } else if (typeof openAuth === "function") openAuth("register");
    });

    bind("closeModal", "click", closeAuth);
    bind("authModal", "click", event => {
        if (event.target === $("authModal")) closeAuth();
    });
    bind("authForm", "submit", handleAuth);
    bind("difficultyFilter", "change", renderExercises);
    bind("chapterFilter", "change", renderExercises);
    bind("searchExercise", "input", renderExercises);
    bind("submitCode", "click", submitPractice);

    bind("showSolution", "click", () => {
        const exercise = exercises.find(
            item => item.id === selectedExerciseId
        );

        if (!exercise) {
            showToast("Bạn hãy chọn bài tập trước.");
            return;
        }

        $("codeEditor").value = exercise.solution || "";
        showToast("Đã hiển thị lời giải mẫu.");
    });

    document.querySelectorAll(".side-link").forEach(button => {
        button.addEventListener("click", () => {
            activatePanel(button.dataset.panel);
        });
    });

    bind("teacherForm", "submit", handleTeacherForm);
    bind("startExam", "click", startExam);

    document.querySelectorAll('input[name="examType"]').forEach(radio => {
        radio.addEventListener("change", () => {
            $("examCountLabel").classList.toggle(
                "hidden",
                radio.checked && radio.value === "Kiểm tra"
            );
        });
    });

    bind("clearHistory", "click", () => {
        if (!confirm("Bạn muốn xóa toàn bộ lịch sử kết quả?")) return;

        saveData(STORAGE.history, []);
        renderHistory();
        showToast("Đã xóa lịch sử kết quả.");
    });

    bind("menuToggle", "click", () => {
        const nav = $("navMenu") || $("mainNav");
        if (nav) nav.classList.toggle("open");
    });

    const navMenu = $("navMenu") || $("mainNav");
    if (navMenu) navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => navMenu.classList.remove("open"));
    });
});